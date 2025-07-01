import WorksPage from "../components/pages/tech/WorksPage.tsx";
import WorksPageLayout from "../components/layouts/WorksPageLayout.tsx";

export default function WorksPageView(){
    const scrollToSection = () => {
        console.log("Bibi was here")
        const section = document.getElementById("works-section");
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return(
        <>
                <WorksPageLayout onClick={()=>scrollToSection()}>
                    <WorksPage/>
                </WorksPageLayout>

        </>
    )
}