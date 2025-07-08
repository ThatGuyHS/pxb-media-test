import { NextRequest, NextResponse } from 'next/server';
import { getEquipmentCategories } from '../../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const categories = getEquipmentCategories();
    
    return NextResponse.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching equipment categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch equipment categories' },
      { status: 500 }
    );
  }
} 