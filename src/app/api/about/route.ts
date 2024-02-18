import { NextResponse } from 'next/server';
import Data from '@/Content/About.json'
export async function GET() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var years = date.getFullYear() - 2003

    if (month < 9 || (month == 9 && day < 18)) {
        years--;
    }

    Data.about = Data.about.map((text) => {
        return text.replace('{years}', `${years}`)
    })

    return NextResponse.json(Data);
}
