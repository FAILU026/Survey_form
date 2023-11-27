import React from 'react'

const Form = ({handleSubmit,formData,setFormData}) => {
  return (
    <div> <div className='form-container'>
    <form onSubmit={handleSubmit}>
       <label htmlFor='name'>Name : </label>
           <input type='text' id='name' name='name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}  />
       <label htmlFor="gender" >Gender</label>
           <select id="gender" name="gender" required value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}  >
               <option value="">Select gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="other">Other</option>
           </select>
       <label htmlFor='nationality'>Nationality : </label>
           <input type='text' id='nationality' name='nationality' required  value={formData.nationality} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
       <label htmlFor="email" >Email</label>
           <input type="email" id="email" name="email" required  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}  />
       <label htmlFor="phone" >Phone Number :</label>
           <input type="tel" id="phone" name="phone" required value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}  />
       <label htmlFor="address" >Address :</label>
           <input type="text" id="address" name="address" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
           <label htmlFor="message" >Message</label>
     <textarea id="message" name="message"  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} ></textarea>
       <button type="submit" >Submit</button>
 


    </form>
 </div></div>
  )
}

export default Form