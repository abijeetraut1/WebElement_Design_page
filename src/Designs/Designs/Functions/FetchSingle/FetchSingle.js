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

    const sepratedCodes = {
        id: singleCall.data.message.id,  
        html: singleCall.data.message.htmlCode, 
        css: singleCall.data.message.cssCode, 
        js: singleCall.data.message.jsCode,
        type: singleCall.data.message.type
    }

    return sepratedCodes;
}