import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req) {
    const data = await req.json();
    const { prompt } = data;

    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });

    const input = {
        prompt: prompt,
        output_format: "png",
        output_quality: 80,
        aspect_ratio: "1:1",
    };

    try {
        const output = await replicate.run("black-forest-labs/flux-schnell", { input });
        console.log(output);

        // Return the first output URL from the response
        return NextResponse.json({ imageUrl: output[0] });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
    }
}




// import { NextResponse,NextRequest } from "next/server";
// import Replicate from "replicate";


// export async function POST(req:NextRequest){

//     const data = await req.json()
//     const {prompt}=data

// const replicate = new Replicate({
//     auth:process.env.REPLICATE_API_TOKEN

// }
// );

// const input = {
//     prompt: prompt,
//     output_format:"png",
//     "output_quality":80,
//     aspect_ratio:"1:1"
// };

// const output:any = await replicate.run("black-forest-labs/flux-schnell", { input });
// console.log(output)
// //=> ["https://replicate.delivery/yhqm/hcDDSNf633zeDUz9sWkKfaf...
//     return NextResponse.json({"imageUrl":output[0]})
// }
