import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDesignPage, setDesignSection, setPage } from '../../../../../reduxFunction/PageControls/pageControls';
import { Render } from '../../Render/Render';
import { clearFetchedCodes, clearPreviousCodeOnDOM } from '../../../../../reduxFunction/storeUsedCode/StoreCodeSlice';
import { Extraction } from '../../Extraction/Extraction';
import { storeHomePageCode } from '../../../../../reduxFunction/StorePageCode/StorePageCode';


const sections = [
    { item: 'Navigation' },
    { item: 'Body' },
    { item: 'Hero' },
    { item: 'Footer' },
    { item: 'Login' },
    { item: 'Webpage' },
];

const pages = [
    { item: 'Home' },
    { item: 'About' },
    { item: 'Login' },
    { item: 'Contact' },
    { item: 'Product' },
    { item: 'Order' },
];


export default function DesignControl({ open }) {
    const dispatch = useDispatch();
    const homePage = useSelector(state => state.StorePageCode.home);
    const aboutPage = useSelector(state => state.StorePageCode.about);
    const contactPage = useSelector(state => state.StorePageCode.contact);
    const loginPage = useSelector(state => state.StorePageCode.authentication);
    const section = useSelector(state => state.pageControls.designSection);
    const designPage = useSelector(state => state.pageControls.designPage);
    // const open = useSelector(state => state.pageControls.isOpen);

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
                            title='choose which component would you like to add'
                        >
                            {sections.map(section => (
                                <option value={section.item}>{section.item} Section</option>
                            ))}

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
                            title='choose which page you like to design'
                            value={designPage}
                        >
                            {pages.map(page => (
                                <option value={page.item}>{page.item} Page</option>
                            ))}
                        </select>
                    </div>
                </div>
            }
        </div>
    )
}
