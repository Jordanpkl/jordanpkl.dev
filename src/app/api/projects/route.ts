import { NextResponse } from 'next/server';
import Data from '@/Content/Projects.json'
export async function GET() {
    return NextResponse.json(Data);
}
