import React,{useState} from "react";


const Login = () => {
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("Email: "+email+" "+typeof(email));
        console.log("Password: "+password+" "+typeof(password));

    }
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return (
    <div className="h-[80%] flex flex-col gap-4 justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg"
        style={{backgroundColor:"rgba(31,41,55,0.8)"}}
        >
        <h2 className="text-center text-3xl font-extrabold text-white">
            Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">
                Email address
                </label>
                <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">
                Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                />
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Login
            </button>
            </div>
        </form>
        </div>
    </div>
    );
};

export default Login;

