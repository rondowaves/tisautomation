import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products(2).csv');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim());
    const headers = lines[0].split(';');
    
    const products = lines.slice(1).map(line => {
      const values = line.split(';');
      return {
        code: values[0] || '',
        name: values[2] || '',
        description: values[3] || '',
        details: values[4] || '',
        category: values[values.length - 3] || '',
        subcategory: values[values.length - 4] || '',
        price: parseFloat(values[6]) || 0,
        active: values[5] === '1',
        unit: values[8] || '',
      };
    }).filter(product => product.name && product.category);

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading products:', error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
