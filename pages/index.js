import { useForm, Controller } from "react-hook-form"
import Container from '@material-ui/core/Container';
import Input from "@material-ui/core/Input"
import {addDoc, collection,getFirestore} from "firebase/firestore"
import app from "../config/firebase"




export default function Home() {
  const { register, handleSubmit, formState: { errors }, control, watch,   } = useForm()

  const onSubmit = (data) => {
    //data isLeaningなど
    console.log(data)
    //firebaseの接続情報（app)をもとにdbをかえす（firestoreを生成)
      const db = getFirestore(app)
      //第二引数にコレクション名
      const answerCollection = collection(db, "answer")
      //ドキュメントid自動生成
      addDoc(answerCollection, data)
      
  }
console.log(errors)
const watchisLearning = watch("isLearning")
const watchwasLearning = watch("wasLearning")
console.log(watchisLearning)
console.log(typeof watchisLearning)
console.log(watchwasLearning)
  return (
    <>
      <Container>
      <h1>プログラミング学習に関するアンケート</h1>

      <form onSubmit={handleSubmit(onSubmit)}> 
        <div>
          <label htmlFor="name">Q1. 名前を入力してください（匿名可）。</label>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({field: { value, onChange }}) => <Input value={value} onChange={onChange} />}
          />
        </div>

        <div>
          <label htmlFor="birth">Q2. 生年を入力してください。</label>
          <Controller
             name="birth"
             defaultValue=""
             control={control}
             rules={{ required: true, pattern: /^[0-9]{8}$/ }}
             render={({field: { value, onChange }}) => <Input  value={value} onChange={onChange} />}
          />
          {
              errors.birth && errors.birth.type === "required" ? 
              <span>このフィールドは回答必須です。</span>: null
            }
            {
              errors.birth && errors.birth.type === "pattern" ? 
              <span>整数8桁で入力してください。</span>: null
            }
          
        </div>
        <div>
          <span>Q3. 現在、プログラミングを学習していますか？</span>
          <input 
            id="isLearning1" 
            {...register("isLearning", { required: true })} 
            name="isLearning"
            type="radio"
            value="true"
          />
          <label htmlFor="isLearning1">はい</label>

          <input 
            id="isLearning2" 
            {...register("isLearning", { required: true })} 
            name="isLearning"
            type="radio"
            value="false"
          />
          <label htmlFor="isLearning2">いいえ</label>
          {
            errors.isLearning && 
            <span>このフィールドは回答必須です。</span>
          }
        </div>

        <div>
          <span>Q4. これまでに、プログラミングを学習したことがありますか？</span>
          <input 
            id="wasLearning1" 
            {...register("wasLearning", { required: true })} 
            name="wasLearning"
            type="radio"
            value="true"
          />
          <label htmlFor="wasLearning1">はい</label>

          <input 
            id="wasLearning2" 
            {...register("wasLearning", { required: true })} 
            name="wasLearning"
            type="radio"
            value="false"
          />
          <label htmlFor="wasLearning2">いいえ</label>
          {
            errors.wasLearning && 
            <span>このフィールドは回答必須です。</span>
          }
          
        </div>

         {
        watchisLearning === "true" || watchwasLearning === "true" ?
        <>
          <label>今まで学習したことのあるプログラミング言語をすべて教えてください</label>
          <div>
          <textarea />
          </div>
        </>
         : null
         
        } 
        
      

       <div>
        <input type="submit" value="アンケートを提出する" />
       </div>
      </form>
      </Container>
    </>
  )
}
