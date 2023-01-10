import { ReactDOM } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import RedError from './RedError'

const Formikform = () => {
    const Newvalidations = yup.object({
        name:yup.string().required("Name is must"),
        age:yup.number().min(10).max(50).required("Age is must"),
        pass:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Enter Strong password').required("Password is must"),
        gender:yup.string().required("Gender is must"),
        hobby:yup.array().min(1).required("Hobby is must"),
        country:yup.string().required("Country is must"),
        comment:yup.string().max(500).required("Comment is must")
    })
  return (
    <div>
      <Formik 
      validationSchema={Newvalidations}
       initialValues={{name:"",age:"",pass:"",gender:"",hobby:[],country:"",comment:""}}
       onSubmit={(values) =>{
        console.log(values);
       }}
        >
        <Form>
        <label>Enter Name : </label>
        <Field type="text" name="name" />
       <RedError name='name'/>
        <br/><br/>

        <label>Enter Age : </label>
        <Field type="number" name="age" />
        <RedError name='age'/>
        <br/><br/>

        <label>Enter Password : </label>
        <Field type="password" name="pass" />
        <RedError name='pass'/>
        <br/><br/>

        <label>Gender : </label>
        <label>Male</label>
        <Field type="radio" name="gender" value="Male"/>&nbsp;&nbsp;&nbsp;

         <label>Female</label>
        <Field type="radio" name="gender" value="Female"/>
        <RedError name='gender'/>
        <br/><br/>
        
        <label>Hobbies :</label>
        <label>Writing</label>
        <Field type="checkbox" name ="hobby" value="Writing"/>&nbsp;&nbsp;&nbsp;&nbsp;
        
        <label>Reading</label>
        <Field type="checkbox" name ="hobby" value="Reading"/>&nbsp;&nbsp;&nbsp;&nbsp;
        
        <label>Sleeping</label>
        <Field type="checkbox" name ="hobby" value="Sleeping"/>
        <RedError name='hobby'/>
        <br/><br/>
        
    
        
        <label>Country :</label>
        <Field  name="country" as="select">
            <option value="">Select</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Indonesia">Indonesia</option>
        </Field>
        <RedError name='country'/>
       <br/><br/>
       <label>Comments :</label>
       <Field as="textarea" name="comment"/>
       <RedError name='comment'/>
     <br/><br/>
        <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Formikform
