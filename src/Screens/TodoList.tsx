import { useRecoilValue } from "recoil";
import CreateToDo from "./../Components/CreateToDo";
import { toDoSelector } from "./../stateAtom";
import ToDo from "./../Components/ToDo";
import styled from "styled-components";
import SelectCategory from "../Components/SelectCategory";
// const TodoList = () => {
//     const [todo, setTodo] = useState("");
//     const [toDoError,setToDoError ] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget: {value}} = event;
//         setToDoError("");
//         setTodo(value)
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if(todo.length < 10) {
//             return setToDoError("To do should be longer")
//         }
//         console.log("submit")
//     }
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input value={todo} placeholder="Wirte a to do" onChange={onChange} />
//             <button>Add</button>
//             {toDoError !== "" ? toDoError : null}
//         </form>
//     </div>
// }

// interface IFrom {
//     email:string
//     firtstName:string
//     lastName:string
//     username:string
// password:string
//     passwordConfirm:string
//     extraError?:string
// }

// const TodoList = () => {
//    const {register, handleSubmit, formState: {errors}, setError} = useForm<IFrom>({
//        defaultValues:{
//            email:"@naver.com"
//        }
//    });
//    const onValid = (data:IFrom) => {
//        if(data.password !== data.passwordConfirm){
//         setError("passwordConfirm", {message: "Password are not the same"},{shouldFocus:true})
//        }
//     //    setError("extraError",{message:"Server offLine."})
//    }
//    console.log(errors)
//     return <div>
//         <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)} >
//             <input {...register("email", {required:"Email is required", pattern: {
//                 value:/^[A-Za-z0-9._%+-]+@naver.com$/,
//                 message:"Only naver.com eamils allowed"
//             }})}  placeholder="Email" />
//             <span style={{color:"red"}}>{errors?.email?.message}</span>
//             <input {...register("firtstName", {required:"Wirte here", validate: {
//                 noNico : (value) => value.includes("nico") ? "no nicos allowed" : true,
//                 noNick :(value) => value.includes("nick") ? "no nick allowed" : true
//             }})}  placeholder="Firtst Name" />
//             <span style={{color:"red"}}>{errors?.firtstName?.message}</span>
//             <input {...register("lastName", {required:"Wirte here"})}  placeholder="Last Name" />
//             <span style={{color:"red"}}>{errors?.lastName?.message}</span>
//             <input {...register("username", {required:"Wirte here", minLength:{value:10, message:"최소 10글자 이상 입력해주세요."}})}  placeholder="Username" />
//             <span style={{color:"red"}}>{errors?.username?.message}</span>
//             <input {...register("password", {required:"Wirte here", minLength:{value:5, message: "최소 5자 입력해주세요."}})}  placeholder="Password" />
//             <span style={{color:"red"}}>{errors?.password?.message}</span>
//             <input {...register("passwordConfirm", {required:"Password is required!", minLength:{value:5, message:"Your password is too short."}})}  placeholder="PasswordConfirm" />
//             <span style={{color:"red"}}>{errors?.passwordConfirm?.message}</span>
//             <button style={{backgroundColor:"white"}}>Add</button>
//             <span style={{color:"red"}}>{errors?.extraError?.message}</span>
//         </form>
//     </div>
// }

const Container = styled.div`
  padding: 16px;
`;

const TodoList = () => {
  const data = useRecoilValue(toDoSelector);

  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <SelectCategory />
      <CreateToDo />
      {data?.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default TodoList;
