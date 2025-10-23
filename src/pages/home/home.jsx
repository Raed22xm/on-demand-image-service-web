import Navbar from "../../components/navbar/navbar";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
function Home() {
    return (
        <div  >
            <Navbar />
            <div className="flex items-center flex-col bg-gray-50 pb-36" >
                <h1 className="pt-14 text-4xl text-blue-500" >Resize Images in Seconds</h1>
                <p className="text-gray-600 mt-5 mb-5 text-center text-xl font-semibold" >Professional image rescaling with intelligent algorithms. Upload, rescale, and download <br /> your images with our powerful cloud-based platform.</p>
                <div>
                    <button className="bg-black text-white p-2 rounded-md mr-5 px-4 font-semibold" > <BrokenImageOutlinedIcon /> Start Resizing Free</button>
                    <button className="bg-white border border-gray-50 text-black p-2 font-semibold rounded-md " >View Demo</button>
                </div>

                <div className="w-[80%] h-[35vh] bg-red-300 rounded-3xl mt-5 bg-center bg-cover shadow-xl" style={{backgroundImage : `url(${"https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTAxMjk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"})`}} >

                </div>
            
            </div>


            <div>

                <h2 className="text-center  text-3xl mt-5 " >Power Full Features</h2>

                <p className="text-center text-lg mt-10" >Everything you need for professional image rescaling</p>
            
                <div className="flex justify-center items-center gap-10 mt-5" >
                    <div className="w-1/5 h-32 bg-red-300" >Describe</div>
                    <div className="w-1/5 h-32 bg-red-300" >Realeaeve</div>
                    <div className="w-1/5 h-32 bg-red-300" >Compare</div>
                </div>
            </div>
        </div>
    )
}


export default Home