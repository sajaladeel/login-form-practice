import Image from "next/image";

export default function Home() {
  return (
<main  className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
  <table className="border-4 rounded-lg">
    <h1 className="sectionHeadTest sm:text-center">CONTACT US</h1>

    <form action=""></form>
    <label className="sm:text-center" id="fname">Your Name:
    
    </label>
    <input className=" sm:text-center text-sm font-medium text-slate-700" type="text" id="fname" name="fname" placeholder="Your good name here..."></input>
    <br />
    <label className="sm:text-center" htmlFor="email">Your Email:</label>
    <input className=" sm:text-centertext-sm font-medium text-slate-700" type="email" id="email " placeholder="Type your email here..."></input>
    <br />
    <label className="sm:text-center" id ="message">Your message: </label>
    <input  className=" sm:text-center text-sm font-medium text-slate-700 padding = 20px" type="text" id="message" placeholder="Type your message here...">
    </input>
    
    <br />

    </table>
 <div className="container"> <button type="submit">Submit</button></div>
</main>
  );
}
