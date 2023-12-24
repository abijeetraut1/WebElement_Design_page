import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import { useDispatch, useSelector } from 'react-redux';
import { setDesignPage, setDesignSection, setPage } from '../../../../../reduxFunction/PageControls/pageControls';
import { Render } from '../../Render/Render';
import { clearFetchedCodes, clearPreviousCodeOnDOM } from '../../../../../reduxFunction/storeUsedCode/StoreCodeSlice';
import { Extraction } from '../../Extraction/Extraction';
import { storeHomePageCode } from '../../../../../reduxFunction/StorePageCode/StorePageCode';


export default function DesignControl({open}) {
    const dispatch = useDispatch();
    const homePage = useSelector(state => state.StorePageCode.home);
    const aboutPage = useSelector(state => state.StorePageCode.about);
    const contactPage = useSelector(state => state.StorePageCode.contact);
    const loginPage = useSelector(state => state.StorePageCode.authentication);
    const section = useSelector(state => state.pageControls.designSection);
    const designPage = useSelector(state => state.pageControls.designPage);

    // codes ids 
    const home = useSelector(state => state.StoreCodeSlice.homeIDs);
    const about = useSelector(state => state.StoreCodeSlice.aboutIDs);
    const contact = useSelector(state => state.StoreCodeSlice.contactIDs);
    const authentication = useSelector(state => state.StoreCodeSlice.authenticationIDs);

    function saveCodes() {
        let extractedCodes;
        if (designPage === "home") {
            extractedCodes = Extraction(home);
        } else if (designPage === "contact") {
            extractedCodes = Extraction(contact);
        } else if (designPage === "about") {
            extractedCodes = Extraction(about);
        } else if (designPage === "login") {
            extractedCodes = Extraction(authentication);
        }

        dispatch(storeHomePageCode({ code: extractedCodes, section: designPage }));
    }


    return (
        <div>
            {open &&
                <div className="space-y-1 my-2">
                    <div >
                        <select
                            id="web-section"
                            name="web-section"
                            autoComplete="web-section"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                            onChange={el => {
                                dispatch(setDesignSection(el.target.value))
                                dispatch(setPage("reset"))
                                
                                dispatch(clearFetchedCodes());
                            }} // section choose name
                            value={section}
                        >
                            <option value="navigation">Navigation Section</option>
                            <option value="hero">Hero Section</option>
                            <option value='body'>Body Section</option>
                            <option value="footer">Footer Section</option>
                            <option value="webpage" >Complete Website</option>
                            <option value="login" >Login</option>
                        </select>
                    </div>

                    <div>
                        <select name="" id=""
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 outline-none font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                            onChange={(el) => {
                                dispatch(setDesignPage(el.target.value));
                                saveCodes();

                                if (!homePage) return;

                                if (el.target.value === "home") {
                                    Render(el.target.value, home, homePage);
                                } else if (el.target.value === "about") {
                                    Render(el.target.value, about, aboutPage);
                                } else if (el.target.value === "contact") {
                                    Render(el.target.value, contact, contactPage);
                                } else if (el.target.value === "login") {
                                    Render(el.target.value, authentication, loginPage);
                                }
                                dispatch(setPage("reset"));
                                // dispatch(clearFetchedCodes());
                                dispatch(clearPreviousCodeOnDOM());
                            }}
                            value={designPage}
                        >
                            <option value="home">Home</option>
                            <option value="about">About</option>
                            <option value='contact'>Contact</option>
                            <option value="login">Login</option>
                        </select>
                    </div>

                    <div className={`${open ? "block" : "hidden"}`}>
                        <div className="mt-2">
                            <div>
                                <SearchComponent />
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
