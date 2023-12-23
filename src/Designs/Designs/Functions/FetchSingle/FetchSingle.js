import axios from "axios"

export async function fetchSigleCode(slug, section) {

    const singleCall = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_GET_SINGLE_CODE}?section=${section.toLowerCase()}&slug=${slug}`,
        params:{
            section,
            slug
        }
    })

    console.log(singleCall)
    const sepratedCodes = {
        id: singleCall.data.message.id,  
        html: singleCall.data.message.html, 
        css: singleCall.data.message.css, 
        js: singleCall.data.message.js,
        type: singleCall.data.message.type,
        slug: slug, 
        name: singleCall.data.message.name
    }

    return sepratedCodes;
}