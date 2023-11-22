import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div>
                <h1 className="text-4xl font-bold text-red-500">404 Error Page Not Found!</h1>
                <div className="flex justify-center">
                <Link to='/'><button className="bg-green-700 rounded-lg my-10 mx-auto p-2 text-white font-bold">Back To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;