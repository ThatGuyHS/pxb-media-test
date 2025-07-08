import { NextRequest, NextResponse } from 'next/server';
import { getEquipmentById, updateEquipment, deleteEquipment } from '../../../lib/db';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const equipment = getEquipmentById(id);
    
    if (!equipment) {
      return NextResponse.json(
        { success: false, error: 'Equipment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: equipment
    });
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch equipment' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // Validate numeric fields if provided
    if (body.dailyRate !== undefined && (typeof body.dailyRate !== 'number' || body.dailyRate < 0)) {
      return NextResponse.json(
        { success: false, error: 'Daily rate must be a positive number' },
        { status: 400 }
      );
    }
    
    if (body.weeklyRate !== undefined && (typeof body.weeklyRate !== 'number' || body.weeklyRate < 0)) {
      return NextResponse.json(
        { success: false, error: 'Weekly rate must be a positive number' },
        { status: 400 }
      );
    }
    
    const updatedEquipment = updateEquipment(id, body);
    
    if (!updatedEquipment) {
      return NextResponse.json(
        { success: false, error: 'Equipment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: updatedEquipment,
      message: 'Equipment updated successfully'
    });
  } catch (error) {
    console.error('Error updating equipment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update equipment' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const deleted = deleteEquipment(id);
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Equipment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Equipment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting equipment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete equipment' },
      { status: 500 }
    );
  }
} 