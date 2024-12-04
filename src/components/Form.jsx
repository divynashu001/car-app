import "./Form.css"

export default function Form(){
    return(
         <div className="form">
            <form >
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"></textarea>
                <button className="Contact-btn btn">Submit</button>
            </form> 
         </div>
    )
}