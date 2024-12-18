import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/image/image69.png";
import group58 from "../assets/image/Group58.png";
import { FaRegUser, FaEyeSlash, FaEye } from "react-icons/fa6";
import { MdMailOutline, MdOutlineLock } from "react-icons/md";
import { toast } from "react-toastify";
import {
  CHECK_USER,
  Forget_Password,
  LOGIN,
  LOGIN_WITH_GOOGLE,
  REGISTER,
  SEND_OTP,
} from "../Api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Logo, userInfo } from "../Recoil";
import Loading from "../component/Loading";
import icons from "../assets";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../FireBaseConfig";

const Login = () => {
  const logo = useRecoilValue(Logo);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetEmail, setForgetEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const setUser = useSetRecoilState(userInfo);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);
  const [showField, setShowField] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForgetEmail(email);

    // Simple email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };

  const handlePasswordChange = (e, setVal) => {
    const password = e.target.value;
    setVal(password);

    // Define the password pattern
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Check if password meets all criteria
    const isValid =
      minLength.test(password) &&
      uppercase.test(password) &&
      lowercase.test(password) &&
      digit.test(password) &&
      specialChar.test(password);

    setIsPasswordValid(isValid);

    // Set error message if password is invalid
    let errorMessage = "";
    if (!minLength.test(password)) {
      errorMessage = "Password must be at least 8 characters long.";
    } else if (!uppercase.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!lowercase.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter.";
    } else if (!digit.test(password)) {
      errorMessage = "Password must contain at least one digit.";
    } else if (!specialChar.test(password)) {
      errorMessage = "Password must contain at least one special character.";
    }

    setPasswordError(errorMessage);
  };

  const loginAdmin = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!conditions) {
      setLoading(false);
      return toast.error("Please accept the terms and conditions");
    }
    try {
      const { data } = await axios.post(LOGIN, { email, password });
      if (data.success) {
        setLoading(false);
        localStorage.setItem("token", data.token);
        setUser(data.userInfo);
        toast.success(data.message);
        navigate("/");
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error?.data?.message || error.message
      );
      setLoading(false);
    }
  };

  const RegisterAdmin = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!conditions) {
      setLoading(false);
      return toast.error("Please accept the terms and conditions");
    }
    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Password does not match");
    }
    if (!isPasswordValid) {
      setLoading(false);
      return toast.error("Pls Enter Valid Passwords");
    }
    try {
      const { data } = await axios.post(REGISTER, { name, email, password });
      if (data.success) {
        setLoading(false);

        toast.success(data.message);
        navigate("/");
      } else {
        setLoading(false);

        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || error?.data?.message || error.message
      );
    }
  };

  const sendOtp = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!forgetEmail) {
      setLoading(false);
      return toast.error("Email is required");
    }
    if (!isEmailValid) {
      setLoading(false);
      return toast.error("Pls Enter Valid Email");
    }
    try {
      const { data } = await axios.post(SEND_OTP, { email: forgetEmail });
      if (data.success) {
        setLoading(false);
        setShowEmailField(false);
        setShowField(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || error?.data?.message || error.message
      );
    }
  };

  const changePassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (newpassword !== newConfirmPassword) {
      setLoading(false);
      return toast.error("Both Password do not Match");
    }
    if (!otp || !newpassword || !newConfirmPassword) {
      setLoading(false);
      return toast.error("All Fields are required");
    }
    try {
      const { data } = await axios.post(Forget_Password, {
        email: forgetEmail,
        otp,
        password: newpassword,
      });
      if (data.success) {
        setLoading(false);
        setShowField(false);
        setOtp("");
        setNewPassword("");
        setNewConfirmPassword("");
        setForgetEmail("");
        toast.success(data.message);
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || error?.data?.message || error.message
      );
    }
  };

  const LoginWithGoogle = async (e) => {
    setLoading(true); // Start loading before the try block
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result?.user?.email) {
        const checkUserResponse = await axios.post(CHECK_USER, {
          email: result.user.email,
        });
        if (checkUserResponse.data.success) {
          const token = result.user.stsTokenManager.accessToken;
          const loginResponse = await axios.post(
            LOGIN_WITH_GOOGLE,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (loginResponse.data.success) {
            setLoading(false);
            localStorage.setItem("token", loginResponse.data.token);
            setUser(loginResponse.data.userInfo);
            toast.success(loginResponse.data.message);
            navigate("/");
            return;
          }
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center min-h-screen bg-contain bg-no-repeat"
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(${icons.blogs})`,
        }}
      >
        <div className="flex p-5 items-start justify-start w-full">
          {" "}
          <img
            src={logo ? logo[0]?.logo : icons.logo}
            onClick={() => navigate("/")}
            className="w-60 cursor-pointer"
            alt="Logo"
          />
        </div>
        <div
          className="flex w-[1062px] mt-10 items-start
        justify-center p-8 bg-opacity-90 rounded-lg shadow-lg"
        >
          {step === 1 && (
            <>
              <div className="p-8 bg-white w-[542px] h-[500px] rounded-l-lg shadow-lg">
                <h2 className="text-4xl font-semibold mb-10 text-center">
                  Registration
                </h2>
                <form onSubmit={RegisterAdmin}>
                  <div className="space-y-4">
                    <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                      <FaRegUser className="text-2xl" />
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full focus:outline-none"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                      <MdMailOutline className="text-2xl" />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full focus:outline-none"
                        type="email"
                        name="name"
                        required
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                      <MdOutlineLock className="text-2xl" />
                      <input
                        value={password}
                        onChange={(e) => handlePasswordChange(e, setPassword)}
                        className="w-full focus:outline-none"
                        type={showPassword ? "text" : "password"}
                        name="name"
                        required
                        placeholder="Create a Password"
                      />
                      {showPassword ? (
                        <FaEye
                          className=" cursor-pointer text-2xl"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <FaEyeSlash
                          className=" cursor-pointer text-2xl"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                    {!isPasswordValid && (
                      <span className="text-[#F35325]">{passwordError}</span>
                    )}
                    <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                      <MdOutlineLock className="text-2xl" />
                      <input
                        value={confirmPassword}
                        onChange={(e) =>
                          handlePasswordChange(e, setConfirmPassword)
                        }
                        className="w-full focus:outline-none"
                        type={showConfirmPassword ? "text" : "password"}
                        name="name"
                        required
                        placeholder="Confirm Password"
                      />
                      {showConfirmPassword ? (
                        <FaEye
                          className=" cursor-pointer text-2xl"
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <FaEyeSlash
                          className=" cursor-pointer text-2xl"
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      )}
                    </div>
                    {!isPasswordValid && (
                      <span className="text-[#F35325]">{passwordError}</span>
                    )}
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mr-2 cursor-pointer"
                        checked={conditions}
                        onChange={(e) => setConditions(e.target.checked)}
                      />
                      <label htmlFor="terms" className="text-gray-600">
                        I accept all{" "}
                        <span className="text-blue-400 cursor-pointer hover:underline">
                          terms & conditions
                        </span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-[#81BC06] text-white py-2 px-4 rounded-lg hover:bg-green-600"
                  >
                    REGISTRATION
                  </button>
                </form>
              </div>
              <div className="p-8 w-[350px] h-[500px] bg-[#81BC06] rounded-r-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Secure Access to a Sustainable Future
                </h2>
                <p className="mb-4 text-[#10100f] text-left">
                  Join us at Energy Innovations as we lead the charge in the
                  energy sector. Our expertise spans from the depths of oil
                  wells to the heights of wind turbines.
                </p>
                <p className="mb-4 text-[#10100f] text-left">
                  Member Login Your gateway to a greener tomorrow. Sign in to
                  explore your projects, monitor progress, and collaborate with
                  our team of experts.
                </p>
                <button
                  onClick={() => {
                    setEmail("");
                    setPassword("");
                    setStep(2);
                  }}
                  className="w-full bg-white text-black mt-5 py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  LOG IN
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <div className="p-8 bg-white w-[542px] h-[500px] rounded-l-lg shadow-lg">
              <h2 className=" text-center text-4xl font-semibold mb-10 ">
                Log In
              </h2>
              <img
                onClick={LoginWithGoogle}
                src={group58}
                className="mx-auto cursor-pointer mb-10"
                alt=""
              />
              <form onSubmit={loginAdmin}>
                <div className="space-y-4">
                  <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                    <MdMailOutline className="text-2xl" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full focus:outline-none"
                      type="email"
                      name="name"
                      required
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="flex px-2 gap-5 py-2 border border-gray-300 rounded-lg  focus:border-green-500 items-center justify-center">
                    <MdOutlineLock className="text-2xl" />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full focus:outline-none"
                      type={showLoginPassword ? "text" : "password"}
                      name="name"
                      required
                      placeholder="Create a Password"
                    />
                    {showLoginPassword ? (
                      <FaEye
                        className=" cursor-pointer text-2xl"
                        onClick={() => setShowLoginPassword(false)}
                      />
                    ) : (
                      <FaEyeSlash
                        className=" cursor-pointer text-2xl"
                        onClick={() => setShowLoginPassword(true)}
                      />
                    )}
                  </div>
                  <div
                    onClick={() => setShowEmailField(true)}
                    className="flex px-5 gap-5 text-[#81BC06] cursor-pointer rounded-lg items-end justify-end"
                  >
                    <span>Forget Password ?</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="loginTerms"
                      required
                      className="mr-2 cursor-pointer"
                      checked={conditions}
                      onChange={(e) => setConditions(e.target.checked)}
                    />
                    <label htmlFor="loginTerms" className="text-gray-600">
                      I accept all{" "}
                      <span className="text-blue-400 cursor-pointer hover:underline">
                        terms & conditions
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#81BC06] text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-10"
                >
                  LOG IN
                </button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className="p-8 w-[350px] h-[500px] bg-[#81BC06] rounded-r-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Secure Access to a Sustainable Future
              </h2>
              <p className="mb-4 text-[#10100f] text-left">
                At Energy Innovations, we’re powering the future with a blend of
                traditional and renewable energy solutions. Our commitment to
                sustainability drives us to deliver top-notch services in the
                oil, gas, and renewable sectors.
              </p>
              <p className="mb-4 text-[#10100f] text-left">
                Client Login Enter your credentials below to access your
                personalized dashboard. Stay connected to our latest projects,
                track your service requests, and manage your account with ease.
              </p>
              <button
                onClick={() => {
                  setEmail("");
                  setPassword("");
                  setStep(1);
                }}
                className="w-full bg-white text-black  py-2 px-4 rounded-lg hover:bg-gray-100"
              >
                REGISTRATION
              </button>
            </div>
          )}
        </div>
      </div>
      {showEmailField && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white px-8 py-5 rounded shadow-md w-[30rem]">
            <span className="flex items-center justify-center text-3xl">
              Forget Password
            </span>
            <div className="flex flex-col items-start justify-start gap-2 mt-10">
              <label>Enter your Email</label>
              <input
                required
                className="w-full border-2 py-2 rounded-lg px-5"
                placeholder="Email"
                type="email"
                value={forgetEmail}
                onChange={handleEmailChange}
              />
              {!isEmailValid && (
                <span className="text-[#F35325]">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="flex items-center w-full justify-evenly mt-5 mb-5">
              <button
                className="py-3 w-[40%] cursor-pointer hover:bg-green-500 rounded-lg bg-[#81BC06] font-normal text-[1.2rem]"
                onClick={sendOtp}
              >
                Send Otp
              </button>
              <button
                className="py-3 w-[40%] cursor-pointer hover:bg-red-800 rounded-lg bg-[#F35325] font-normal text-[1.2rem]"
                onClick={() => {
                  setShowEmailField(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showField && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white px-8 py-5 rounded shadow-md w-[30rem]">
            <span className="flex items-center justify-center text-3xl">
              Change Password
            </span>
            <div className="flex flex-col items-start justify-start gap-2 mt-10">
              <label>Enter Otp</label>
              <input
                className="w-full border-2 py-2 rounded-lg px-5"
                placeholder="Otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 mt-2">
              <label>Enter New Password</label>
              <input
                className="w-full border-2 py-2 rounded-lg px-5"
                placeholder="new password"
                type="text"
                value={newpassword}
                onChange={(e) => handlePasswordChange(e, setNewPassword)}
              />
            </div>
            {!isPasswordValid && (
              <span className="text-[#F35325]">{passwordError}</span>
            )}
            <div className="flex flex-col items-start justify-start gap-2 mt-2">
              <label>Confirm New Password</label>
              <input
                className="w-full border-2 py-2 rounded-lg px-5"
                placeholder="new Password"
                type="text"
                value={newConfirmPassword}
                onChange={(e) => handlePasswordChange(e, setNewConfirmPassword)}
              />
            </div>
            {!isPasswordValid && (
              <span className="text-[#F35325]">{passwordError}</span>
            )}
            <div className="flex items-center w-full justify-evenly mt-5 mb-5">
              <button
                className="py-3 w-[40%] cursor-pointer hover:bg-green-500 rounded-lg bg-[#81BC06] font-normal text-[1.2rem]"
                onClick={changePassword}
              >
                Change Password
              </button>
              <button
                className="py-3 w-[40%] cursor-pointer hover:bg-red-800 rounded-lg bg-[#F35325] font-normal text-[1.2rem]"
                onClick={() => {
                  setShowField(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default Login;
