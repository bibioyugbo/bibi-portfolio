import WorksPage from "../components/pages/WorksPage.tsx";
import WorksPageLayout from "../components/layouts/WorksPageLayout.tsx";

export default function WorksPageView(){
    return(
        <>
                <WorksPageLayout>
                    <WorksPage/>
                </WorksPageLayout>

        </>
    )
}