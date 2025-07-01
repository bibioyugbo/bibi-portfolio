
interface FooterProps {
    lightMode?:boolean
    onClick: ()=> void
}
export default function Footer({lightMode, onClick}:FooterProps){


    return(
        <footer className={"text-sm flex items-center gap-2 justify-center  p-4 sticky bottom-0 text-center"}>
            <div>
                © 2025 OBEHIOYE OYUGBO
            </div>
            <button onClick={()=>onClick()} className={`cursor-pointer p-2`}>
                {!lightMode?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m10 4l.707-.707L10 2.586l-.707.707zm8 17a1 1 0 1 0 0-2zM15.707 8.293l-5-5l-1.414 1.414l5 5zm-6.414-5l-5 5l1.414 1.414l5-5zM9 4v10h2V4zm7 17h2v-2h-2zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5z"/></svg>
                :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m10 4l.707-.707L10 2.586l-.707.707zm8 17a1 1 0 1 0 0-2zM15.707 8.293l-5-5l-1.414 1.414l5 5zm-6.414-5l-5 5l1.414 1.414l5-5zM9 4v10h2V4zm7 17h2v-2h-2zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5z"/></svg>
                }
            </button>

        </footer>
    )
}