
import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { NextResponse } from "next/server";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

// Helper function to convert the image URL to Base64 format
const convertImage = async (imageUrl) => {
    try {
        // Ensure the URL is valid
        new URL(imageUrl); // Throws an error if the URL is invalid

        // Use Axios to fetch the image as an array buffer
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        // Convert the image data to a Base64 string
        const base64Image = Buffer.from(response.data).toString('base64');
        return base64Image;
    } catch (error) {
        console.log("Error converting image to base64:", error);
        throw new Error("Image conversion failed");
    }
};

// POST request handler
export async function POST(req) {
    try {
        // Get the image URL from the POST request body
        const data = await req.json();
        const { url } = data;

        console.log("Received URL: ", url);

        // Check if URL is provided and valid
        if (!url || typeof url !== 'string') {
            return NextResponse.json({ error: "Invalid or missing URL" }, { status: 400 });
        }

        // Convert the image from URL to Base64 format
        const base64Image = await convertImage(url);
        const fileName = '/ai_story/' + Date.now() + ".png";
        const imageRef = ref(storage, fileName);

        // Upload the base64 image to Firebase Storage
        await uploadString(imageRef, base64Image, 'base64');
        console.log('File uploaded');

        // Get the download URL for the uploaded image
        const downloadUrl = await getDownloadURL(imageRef);
        console.log("Download URL: ", downloadUrl);

        // Return the URL as the response
        return NextResponse.json({ imageUrl: downloadUrl });
    } catch (error) {
        console.log("Error uploading image:", error);
        return NextResponse.json({ error: "Error uploading image" }, { status: 500 });
    }
}



// import { storage } from "@/config/firebaseConfig";
// import axios from "axios";
// import { NextResponse, NextRequest } from "next/server";
// import { getDownloadURL, ref, uploadString } from "firebase/storage"; // Ensure ref is imported

// export async function POST(req) {
//     try {
//         // Get the image URL from the POST request body
//         const data = await req.json();
//         const { url } = data;

//         console.log("Received URL: ", url);

//         // Check if URL is provided and valid
//         if (!url || typeof url !== 'string') {
//             return NextResponse.json({ error: "Invalid or missing URL" }, { status: 400 });
//         }

//         // Convert the image from URL to Base64 format (without "data:image/png;base64,")
//         const base64Image = await convertImage(url);
//         const fileName = '/ai_story/' + Date.now() + ".png";
//         const imageRef = ref(storage, fileName);

//         // Upload the base64 image to Firebase Storage
//         await uploadString(imageRef, base64Image, 'base64').then(() => {
//             console.log('File uploaded');
//         });

//         // Get the download URL for the uploaded image
//         const downloadUrl = await getDownloadURL(imageRef);
//         console.log("Download URL: ", downloadUrl);

//         // Return the URL as the response
//         return NextResponse.json({ imageUrl: downloadUrl });
//     } catch (error) {
//         console.log("Error uploading image:", error);
//         return NextResponse.json({ error: "Error uploading image" }, { status: 500 });
//     }
// }

// // Helper function to convert the image URL to Base64 format
// export const convertImage = async (imageUrl) => {
//     try {
//         // Ensure the URL is valid
//         new URL(imageUrl); // Throws an error if the URL is invalid

//         // Use Axios to fetch the image as an array buffer
//         const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

//         // Convert the image data to a Base64 string
//         const base64Image = Buffer.from(response.data).toString('base64');
//         return base64Image;
//     } catch (error) {
//         console.log("Error converting image to base64:", error);
//         throw new Error("Image conversion failed");
//     }
// };





// import { storage } from "@/config/firebaseConfig";
// import axios from "axios";
// import { NextResponse, NextRequest } from "next/server";
// import { getDownloadURL, ref, uploadString } from "firebase/storage"; // Ensure ref is imported

// export async function POST(req: NextRequest) {
//     try {
//         // Get the image URL from the POST request body
//         const data = await req.json();
//         const { url } = data;

//         console.log("Received URL: ", url);

//         // Check if URL is provided and valid
//         if (!url || typeof url !== 'string') {
//             return NextResponse.json({ error: "Invalid or missing URL" }, { status: 400 });
//         }

//         // Convert the image from URL to Base64 format (without "data:image/png;base64,")
//         const base64Image = await convertImage(url);
//         const fileName = '/ai_story/' + Date.now() + ".png";
//         const imageRef = ref(storage, fileName);

//         // Upload the base64 image to Firebase Storage (without "data:image/png;base64,")
//         await uploadString(imageRef, base64Image, 'base64').then((snapshot) => {
//             console.log('File uploaded');
//         });

//         // Get the download URL for the uploaded image
//         const downloadUrl = await getDownloadURL(imageRef);
//         console.log("Download URL: ", downloadUrl);

//         // Return the URL as the response
//         return NextResponse.json({ imageUrl: downloadUrl });
//     } catch (error) {
//         console.log("Error uploading image:", error);
//         return NextResponse.json({ error: "Error uploading image" }, { status: 500 });
//     }
// }

// // Helper function to convert the image URL to Base64 format
// export const convertImage = async (imageUrl: string) => {
//     try {
//         // Ensure the URL is valid
//         new URL(imageUrl); // Throws an error if the URL is invalid

//         // Use Axios to fetch the image as an array buffer
//         const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

//         // Convert the image data to a Base64 string (without "data:image/png;base64,")
//         const base64Image = Buffer.from(response.data).toString('base64');
//         return base64Image;
//     } catch (error) {
//         console.log("Error converting image to base64:", error);
//         throw new Error("Image conversion failed");
//     }
// };
