import { NextResponse } from 'next/server';
import Data from '@/Content/Uses.json'
export async function GET() {
    return NextResponse.json(Data);
}
