import { NextRequest, NextResponse } from 'next/server';
import { getAllEquipment, addEquipment, getAvailableEquipment, getEquipmentByCategory, getEquipmentCategories } from '../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const availableOnly = searchParams.get('available') === 'true';
    const category = searchParams.get('category');
    
    let equipment;
    
    if (availableOnly) {
      equipment = getAvailableEquipment();
    } else if (category) {
      equipment = getEquipmentByCategory(category);
    } else {
      equipment = getAllEquipment();
    }
    
    return NextResponse.json({
      success: true,
      data: equipment,
      categories: getEquipmentCategories()
    });
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch equipment' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'category', 'description', 'dailyRate', 'weeklyRate'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Validate numeric fields
    if (typeof body.dailyRate !== 'number' || body.dailyRate < 0) {
      return NextResponse.json(
        { success: false, error: 'Daily rate must be a positive number' },
        { status: 400 }
      );
    }
    
    if (typeof body.weeklyRate !== 'number' || body.weeklyRate < 0) {
      return NextResponse.json(
        { success: false, error: 'Weekly rate must be a positive number' },
        { status: 400 }
      );
    }
    
    // Set default values
    const equipmentData = {
      name: body.name,
      category: body.category,
      description: body.description,
      dailyRate: body.dailyRate,
      weeklyRate: body.weeklyRate,
      availability: body.availability !== undefined ? body.availability : true,
      imageUrl: body.imageUrl || '',
      specifications: body.specifications || {}
    };
    
    const newEquipment = addEquipment(equipmentData);
    
    return NextResponse.json({
      success: true,
      data: newEquipment,
      message: 'Equipment added successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding equipment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add equipment' },
      { status: 500 }
    );
  }
} 