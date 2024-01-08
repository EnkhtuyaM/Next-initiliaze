import React from "react";
import Card from "./Card";

const DummyData = [
    {title: "“Аригтай хадгалъя” аяны супер урамшууллын эзэд тодорлоо",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314452-05012024-1704447092-1018013726-Picture1.jpg"
    },
    {title: "“Ц.Отгонсүрэн: “Холо лэ байна” дуунд эмзэглэсэн ч тэдгээр уран бүтээлчдийг тоглолтдоо урина",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/-08012024-1704702983-87795366-otgonsuren.jpg"
    },
    {title: "Монголчууд эрт үеэс үлэг гүрвэл гэх том амьтан тэнгэрээс унасан хэмээн төсөөлж байсан",
    img: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314502-08012024-1704701651-1569428599-DSC068721.jpg"
    },
]

export default function Cards(){
    console.log (DummyData[0])
    return (
        <div>
            <Card data = {DummyData[0]}/>
            <Card data = {DummyData[1]}/>
            <Card data = {DummyData[2]}/>
        </div>
    )
}