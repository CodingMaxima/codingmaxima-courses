import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-compiler-cmp',
  templateUrl: './compiler-cmp.component.html',
})
export class CompilerCmpComponent {

  @Input() public problemId?:any;
  @Input() public languageId:any;

  myResult:Set<ResultModel>=new Set<ResultModel>();


  theme = 'vs-dark';

  responsData:any;

  inputData:string='';
  outputData:string='';
  accepedOutput:string='';
  showResult:boolean=false;
  showCompilerErrorMsg:boolean=false;
  showProcessBar:boolean=false;
  caseNumber:number=1;
  verditResult:string='';

  constructor(private http: HttpClient){
    
  }

  codeModel: CodeModel = {
    language: 'java',
    uri: '',
    value: 
`public class CodingMaxima{
  
  public static void main(String[] args){
    
  } 
}`
  };
  value1=`public class CodingMaxima{
  
    public static void main(String[] args){
      
    } 
  }`;

  options = {
    contextmenu: false,
    minimap: {
      enabled: false
    }
  };

  onCodeChanged(value:any) {
    this.value1='';
    this.value1=value;
    
  }

  getValue(){

    this.myResult.add({name:'AC',value:'Accepted'});
    this.myResult.add({name:'WA',value:'Wrong Answer'});
    this.myResult.add({name:'IR',value:'Invalid Return'});
    this.myResult.add({name:'RTE',value:'Runtime Exception'});


    let req:CodeRequestModel=new CodeRequestModel();
    req.problemId=this.problemId;
    req.languageId=this.languageId;
    req.sourceCode=btoa(this.value1);
    //req.sourceCode="aW1wb3J0IGphdmEuaW8uKjsKcHVibGljIGNsYXNzIEhlbGxvV29ybGR7CgogICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZyBbXWFyZ3MpIHRocm93cyBFeGNlcHRpb24gewogICAgICAgIEJ1ZmZlcmVkUmVhZGVyIHNjID0gbmV3IEJ1ZmZlcmVkUmVhZGVyKG5ldyBJbnB1dFN0cmVhbVJlYWRlcihTeXN0ZW0uaW4pKTsKICAgICAgICBpbnQgbiA9IEludGVnZXIucGFyc2VJbnQoc2MucmVhZExpbmUoKSk7CiAgICAgICAgd2hpbGUgKG4tLSAhPSAwKSB7CiAgICAgICAgICAgIFN0cmluZ1tdIG51bXMgPSBzYy5yZWFkTGluZSgpLnNwbGl0KCIgIik7CiAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbihJbnRlZ2VyLnBhcnNlSW50KG51bXNbMF0pICsgSW50ZWdlci5wYXJzZUludChudW1zWzFdKSk7CiAgICAgICAgfQogICAgIH0KfQ==";
    req.timeLimit=1;
    req.memoryLimit=1024;

    // let response=this.getReqest(req);

  }

  getReqest(values:CodeRequestModel) {
    this.showProcessBar=true;
    this.showResult=false;
    this.showCompilerErrorMsg=false;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>('http://152.70.245.19:80/submit',JSON.stringify(values), httpOptions).subscribe(response => { 
      
      this.responsData=response;
      this.showProcessBar=false;
      if(response.testCaseResults?.length){
        this.showResult=true;
      }
      if(response.compileError?.length){
        this.showCompilerErrorMsg=true;
      }
      this.setValues();
    });

  }

  setValues(){
    this.inputData='';
    this.outputData='';
    this.accepedOutput='';
    this.verditResult='';
    this.caseNumber=1;
    if(this.responsData.testCaseResults?.length>0){
      let arr:any=this.responsData.testCaseResults[0];
      this.caseNumber=arr.case;
      this.inputData=arr.input;
      this.accepedOutput=arr.output;
      this.outputData=arr.yourOutput;
      this.myResult.forEach(element => {
        if(arr.verdict==element.name)
        this.verditResult=element.value;
      });
      //this.verditResult;

    }

  }

  testCaseValue(value:any){
    this.caseNumber=value.case;
    this.inputData=value.input;
    this.accepedOutput=value.output;
    this.outputData=value.yourOutput;

  }

  clear(){
    this.codeModel.value=`class CodingMaxima{
  
      public static void main(String[] args){
        
      } 
    }`;
  }
}

class CodeRequestModel{

  public problemId?:string;
  public languageId?:string;
  public sourceCode?:string;
  public timeLimit?:number;
  public memoryLimit?:number;

}

class ResultModel{

  public name:string='';
  public value:string='';
  

}
