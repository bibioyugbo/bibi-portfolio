export class StoreUtil {
    static execute(callback: ()=>any){
        setTimeout(()=>{callback()}, 0)
    }
}