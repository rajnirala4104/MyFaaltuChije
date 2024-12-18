import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import PageBannerWithTitle from "../component/PageBannerWithTitle";
import icons from "../assets";
import BlueBlackTitle from "../component/BlueBlackTitle";
import Loading from "../component/Loading";
import { FILE_UPLOAD, GET_JOB_POSTINGS, JOB_APPLICATION } from "../Api";
import Footer from "../component/Footer";
import ReadMoreBtn from "../component/ReadMoreBtn";
import { RiUpload2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { JobPostings, Logo, userInfo } from "../Recoil";
import { useRecoilState, useRecoilValue } from "recoil";

function ApplyJobPage() {
  const [loading, setLoading] = useState(true);
  const [jobPostings, setJobPostings] = useState([]);
  const [fileName, setFileName] = useState("");
//   new

const [logo, setLogo] = useRecoilState(Logo);
const token = localStorage?.getItem("token") || undefined;
const targetDivRef = useRef(null);
const userData = useRecoilValue(userInfo);
const Openings = useRecoilValue(JobPostings);
const [fullName, setFullName] = useState(null);
const [latName, setlatName] = useState(null);
const [number, setnumber] = useState(null);
const [email, setemail] = useState(null);
const [dob, setdob] = useState(null);
const [gender, setgender] = useState(null);
const [address, setaddress] = useState(null);
const [zipCode, setzipCode] = useState(null);
const [education, seteducation] = useState(null);
const [experience, setexperience] = useState(null);
const [field, setfield] = useState("Computer Engineer");
const [role, setrole] = useState("Higher Engineer");
const [currentCtc, setcurrentCtc] = useState(null);
const [expectedCtc, setexpectedCtc] = useState(null);
const [resume, setresume] = useState(null);

const [jobPostingMenu, setJobPostingMenu] = useState(false);
const [jobid, setjobid] = useState(undefined);
  const { id } = useParams();
  const decodedJobId = decodeURIComponent(id);

  // Fetch job postings on component mount
  useEffect(() => {
    const fetchJobPostings = async () => {
      setLoading(true);
      const jobs = await GET_JOB_POSTINGS();
      setJobPostings(jobs);
      setLoading(false);
      console.log(jobPostings);
    };
    fetchJobPostings();
  }, []);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Filter jobs with matching ID
  const filteredJobs = jobPostings.filter((job) => job._id === decodedJobId);
  const splitTextInSpans = (
    text,
    firstSpanClassName = "",
    secondSpanClassName = "",
    firstSpanWordCount = 1
  ) => {
    if (!text) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, firstSpanWordCount).join(" ");
    const remainingWords = words.slice(firstSpanWordCount).join(" ");

    return (
      <>
        <span className={firstSpanClassName}>{firstWords}</span>
        {remainingWords && (
          <span className={secondSpanClassName}> {remainingWords}</span>
        )}
      </>
    );
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (
      fullName &&
      jobid &&
      latName &&
      number &&
      email &&
      dob &&
      gender &&
      address &&
      zipCode &&
      education &&
      experience &&
      field &&
      role &&
      currentCtc &&
      expectedCtc &&
      resume
    ) {
      let link1 = resume;

      
      if (typeof resume !== "string") {
        try {
          const formData = new FormData();
          formData.append("file", resume); // Use addLogo here
          const { data } = await axios.post(FILE_UPLOAD, formData);
          if (data.success) {
            link1 = data.fileUrl;
          } else {
            toast.error(data.message || "File upload failed");
          }
        } catch (error) {
          toast.error(
            error?.response?.data?.message ||
              error?.data?.message ||
              error.message
          );
          setLoading(false);
          return;
        }
      }

      // Proceed with updating the service
      try {
        const { data } = await axios.post(JOB_APPLICATION, {
          jobId: jobid,
          fullName: fullName,
          lastName: latName,
          contactNumber: number,
          email: email,
          DOB: dob,
          gender: gender,
          address: address,
          zipCode: zipCode,
          education: education,
          experience: experience,
          field: field,
          role: role,
          currentCTC: currentCtc,
          expectedCTC: expectedCtc,
          resume: link1,
        });

        if (data.success) {
          setFullName("");
          setlatName("");
          setnumber("");
          setemail("");
          setdob("");
          setgender("");
          setaddress("");
          setzipCode("");
          seteducation("");
          setexperience("");
          setfield("");
          setrole("");
          setcurrentCtc("");
          setexpectedCtc("");
          setresume("");
          setJobPostingMenu("");
          setjobid(undefined);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.data?.message ||
            error.message
        );
      } finally {
        setLoading(false);
      }
    } else if (!jobid) {
      setLoading(false);
      return toast.error("Pls refresh the application");
    } else {
      setLoading(false);
      return toast.error("All Fields are required");
    }
  };

  return (
    <>
      <Header />
      <PageBannerWithTitle backgroundImage={icons.career2} title="Career" />
      {loading ? (
        <Loading />
      ) : filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <>
            <div className="w-full flex flex-col mb-8   items-center" key={job._id}>
              <div className="bg-black h-[1px] w-[80%] mt-10 hidden lg:block"></div>
              <div className="xl:w-[78%] w-[90%] mt-10 flex lg:gap-12 gap-4 flex-col-reverse lg:flex-row ">
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-0">
                  <img
                    src={icons.applyPageImage}
                    alt="applyPageImage"
                    className="rounded-2xl lg:w-[450px] lg:h-[680px] w-[80%] object-cover"
                  />
                  <div className=" flex gap-5 items-center mt-5">
                    <BlueBlackTitle blueText={"Job"} blackText={" Location:"} />
                    <h3 className=" text-lg">{job.location}</h3>
                  </div>
                  <div className=" flex gap-5 items-center mt-5">
                    <BlueBlackTitle blueText={"Job"} blackText={" Type:"} />
                    <h3 className=" text-lg">
                      {job.role.join(", ") || "Not Mentioned"}
                    </h3>
                  </div>
                  <div className=" flex flex-col gap-5  mt-5">
                    <BlueBlackTitle
                      blueText={"What"}
                      blackText={" We Offer:"}
                    />
                    <ul className=" list-disc w-[80%] ml-8 text-lg">
                      <li>
                        Competitive salary and performance-based incentives.
                      </li>
                      <li>
                        Comprehensive benefits, including health insurance and
                        retirement plans.
                      </li>
                      <li>
                        Opportunities for professional growth and development.
                      </li>
                      <li>
                        A collaborative work environment focused on innovation
                        and sustainability.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="  flex flex-col lg:w-[63%] ">
                  <h2 className="text-start w-full">
                    {splitTextInSpans(
                      job.title,
                      "text-[#81BC06] text-[35px] capitalize",
                      "text-[35px] text-black capitalize",
                      job.title.split(" ").length > 3 ? 2 : 1
                    )}
                  </h2>
                  <div className=" w-full h-[1px] bg-black mt-4"></div>
                  <div className=" mt-4">
                    <BlueBlackTitle
                      blueText={"Job"}
                      blackText={" Description :"}
                    />
                    <p className="w-[90%] overflow-hidden text-lg mt-2">
                      {job.detail.split("").reduce((acc, char, index) => {
                        acc.push(char);
                        if (
                          (index + 1) % Math.ceil(job.detail.length / 2) ===
                          0
                        ) {
                          acc.push(<br key={index} />);
                        }
                        return acc;
                      }, [])}
                    </p>
                  </div>
                  <div className="mt-4">
                    <BlueBlackTitle
                      blueText={"Job"}
                      blackText={" Responsibilities :"}
                    />
                    <ul className=" list-disc w-[80%] ml-8 text-lg mt-2">
                      <li>
                        Develop and optimize chemical processes for
                        manufacturing, ensuring high efficiency and
                        cost-effectiveness.
                      </li>
                      <li>
                        Conduct research and experiments to develop new
                        materials, products, or processes.
                      </li>
                      <li>
                        Ensure compliance with safety, environmental, and
                        regulatory standards during all production stages.
                      </li>
                      <li>
                        Collaborate with cross-functional teams to scale
                        lab-based innovations to full-scale production.
                      </li>
                      <li>
                        Monitor and troubleshoot plant operations to maintain
                        product quality and production goals.
                      </li>
                      <li>
                        Prepare technical reports, documentation, and
                        presentations for stakeholders.
                      </li>
                      <li>
                        Implement continuous improvement initiatives for
                        existing processes.
                      </li>
                    </ul>
                  </div>
                  <div className=" mt-4">
                    <BlueBlackTitle blueText={"Requirements :"} />
                    <ul className=" list-disc w-[80%] ml-8 text-lg mt-2">
                      <h3 className=" font-medium text-xl mb-1">Educational Qualification:</h3>
                      <li>
                        Bachelor's degree in Chemical Engineering or a related
                        field (Master,s preferred).
                      </li>
                      <h3  className=" font-medium text-xl mb-1">Educational Qualification:</h3>
                      <li>
                        2-5 years of experience in chemical process design,
                        optimization, or production.
                      </li>
                      <h3  className=" font-medium text-xl mb-1">Technical Skills:</h3>
                      <li>
                        Proficiency in using simulation tools like Aspen Plus,
                        HYSYS, or MATLAB.
                      </li>
                      <li>
                        Strong knowledge of process safety standards and
                        environmental regulations.
                      </li>
                      <li>
                        Experience with scale-up processes and pilot plant
                        operations is a plus.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" bg-black h-[1px] w-[80%] mt-10"></div>
              <div className=" w-full flex flex-col items-center justify-center mt-10">
          <h3 className=" text-4xl font-medium text-center">
          Submit your resume
          </h3>
          <form className=" w-[80%] flex flex-col gap-4 mt-7" onSubmit={handleSubmit}>
            <div className=" w-full flex gap-8 flex-col md:flex-row">
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Name </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className=" w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter name"
                />
              </div>
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Email ID. </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter Email ID."
                />
              </div>
            </div>
            <div className=" w-full flex gap-8 flex-col md:flex-row">
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Contact No </label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                  className=" w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter Contact No "
                />
              </div>
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  className="w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className=" w-full flex gap-8 flex-col md:flex-row">
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Education </label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => seteducation(e.target.value)}
                  className=" w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter Education"
                />
              </div>
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Experience</label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setexperience(e.target.value)}
                  className="w-full  bg-[#05A6F01A] border-[#05A6F0] border outline-none h-10 pl-5 rounded-2xl"
                  placeholder="Enter Experience"
                />
              </div>
            </div>
            <div className=" w-full flex gap-8">
              <div className=" flex flex-col gap-2 w-full ">
                <label className=" text-xl font-normal">Upload Resume</label>

                <div className="relative justify-center flex items-center bg-[#05A6F01A] border border-[#05A6F0] rounded-2xl h-10 pl-5 cursor-pointer">
                  <RiUpload2Fill className="mr-2 text-[#878787] text-[20px]" />
                  <span className="text-[#878787] text-[20px]">
                    {fileName || "UPLOAD YOUR RESUME"}
                  </span>
                  <input
                    type="file"

                    className="absolute inset-0 opacity-0 cursor-pointer"
                   
                    accept="application/pdf"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file && file.type === "application/pdf") {
                          setresume(file);
                        } else {
                          toast.error("Please select a PDF file.");
                        }
                      }}
                  />
                </div>
              </div>
            </div>
            <div className=" w-full grid place-items-center mt-4">
            <ReadMoreBtn text={"Submit"} />
            </div>
          </form>
        </div>
            </div>
            <Footer/>
          </>
        ))
      ) : (
        <p className="text-gray-600">No job details available.</p>
      )}
    </>
  );
}

export default ApplyJobPage;
