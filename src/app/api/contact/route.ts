import { NextResponse } from 'next/server';
import Data from '@/Content/Contact.json'
export async function GET() {
    return NextResponse.json(Data);
}
