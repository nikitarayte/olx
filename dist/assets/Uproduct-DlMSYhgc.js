import{p as re,r as l,j as t,q as ne,s as oe,t as ae,v as ce,y as le}from"./index-Cfvev53G.js";import{u as ie,c as de,a as E,h as I}from"./handleClasses-CPIvM1_c.js";import{u as N,c as g,C as B}from"./Container-llVzBzOw.js";import{C as A,a as R,R as pe}from"./Row-BqM8Oepw.js";var V={exports:{}},ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",me=ue,fe=me;function W(){}function G(){}G.resetWarningCache=W;var he=function(){function e(n,o,a,i,p,u){if(u!==fe){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function s(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:G,resetWarningCache:W};return r.PropTypes=r,r};V.exports=he();var je=V.exports;const k=re(je),xe=["as","disabled"];function ye(e,s){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ge(e){return!e||e.trim()==="#"}function M({tagName:e,disabled:s,href:r,target:n,rel:o,role:a,onClick:i,tabIndex:p=0,type:u}){e||(r!=null||n!=null||o!=null?e="a":e="button");const d={tagName:e};if(e==="button")return[{type:u||"button",disabled:s},d];const C=x=>{if((s||e==="a"&&ge(r))&&x.preventDefault(),s){x.stopPropagation();return}i==null||i(x)},w=x=>{x.key===" "&&(x.preventDefault(),C(x))};return e==="a"&&(r||(r="#"),s&&(r=void 0)),[{role:a??"button",disabled:void 0,tabIndex:s?void 0:p,href:r,target:e==="a"?n:void 0,"aria-disabled":s||void 0,rel:e==="a"?o:void 0,onClick:C,onKeyDown:w},d]}const Ce=l.forwardRef((e,s)=>{let{as:r,disabled:n}=e,o=ye(e,xe);const[a,{tagName:i}]=M(Object.assign({tagName:r,disabled:n},o));return t.jsx(i,Object.assign({},o,a,{ref:s}))});Ce.displayName="Button";const F=l.forwardRef(({as:e,bsPrefix:s,variant:r="primary",size:n,active:o=!1,disabled:a=!1,className:i,...p},u)=>{const d=N(s,"btn"),[C,{tagName:w}]=M({tagName:e,disabled:a,...p}),x=w;return t.jsx(x,{...C,...p,ref:u,disabled:a,className:g(i,d,o&&"active",r&&`${d}-${r}`,n&&`${d}-${n}`,p.href&&a&&"disabled")})});F.displayName="Button";function Ne(e,s){return l.Children.toArray(e).some(r=>l.isValidElement(r)&&r.type===s)}const Fe={type:k.string,tooltip:k.bool,as:k.elementType},_=l.forwardRef(({as:e="div",className:s,type:r="valid",tooltip:n=!1,...o},a)=>t.jsx(e,{...o,ref:a,className:g(s,`${r}-${n?"tooltip":"feedback"}`)}));_.displayName="Feedback";_.propTypes=Fe;const v=l.createContext({}),P=l.forwardRef(({id:e,bsPrefix:s,className:r,type:n="checkbox",isValid:o=!1,isInvalid:a=!1,as:i="input",...p},u)=>{const{controlId:d}=l.useContext(v);return s=N(s,"form-check-input"),t.jsx(i,{...p,ref:u,type:n,id:e||d,className:g(r,s,o&&"is-valid",a&&"is-invalid")})});P.displayName="FormCheckInput";const O=l.forwardRef(({bsPrefix:e,className:s,htmlFor:r,...n},o)=>{const{controlId:a}=l.useContext(v);return e=N(e,"form-check-label"),t.jsx("label",{...n,ref:o,htmlFor:r||a,className:g(s,e)})});O.displayName="FormCheckLabel";const H=l.forwardRef(({id:e,bsPrefix:s,bsSwitchPrefix:r,inline:n=!1,reverse:o=!1,disabled:a=!1,isValid:i=!1,isInvalid:p=!1,feedbackTooltip:u=!1,feedback:d,feedbackType:C,className:w,style:x,title:$="",type:L="checkbox",label:S,children:m,as:T="input",...f},c)=>{s=N(s,"form-check"),r=N(r,"form-switch");const{controlId:y}=l.useContext(v),h=l.useMemo(()=>({controlId:e||y}),[y,e]),j=!m&&S!=null&&S!==!1||Ne(m,O),se=t.jsx(P,{...f,type:L==="switch"?"checkbox":L,ref:c,isValid:i,isInvalid:p,disabled:a,as:T});return t.jsx(v.Provider,{value:h,children:t.jsx("div",{style:x,className:g(w,j&&s,n&&`${s}-inline`,o&&`${s}-reverse`,L==="switch"&&r),children:m||t.jsxs(t.Fragment,{children:[se,j&&t.jsx(O,{title:$,children:S}),d&&t.jsx(_,{type:C,tooltip:u,children:d})]})})})});H.displayName="FormCheck";const q=Object.assign(H,{Input:P,Label:O}),K=l.forwardRef(({bsPrefix:e,type:s,size:r,htmlSize:n,id:o,className:a,isValid:i=!1,isInvalid:p=!1,plaintext:u,readOnly:d,as:C="input",...w},x)=>{const{controlId:$}=l.useContext(v);return e=N(e,"form-control"),t.jsx(C,{...w,type:s,size:n,ref:x,readOnly:d,id:o||$,className:g(a,u?`${e}-plaintext`:e,r&&`${e}-${r}`,s==="color"&&`${e}-color`,i&&"is-valid",p&&"is-invalid")})});K.displayName="FormControl";const ve=Object.assign(K,{Feedback:_}),Q=l.forwardRef(({className:e,bsPrefix:s,as:r="div",...n},o)=>(s=N(s,"form-floating"),t.jsx(r,{ref:o,className:g(e,s),...n})));Q.displayName="FormFloating";const U=l.forwardRef(({controlId:e,as:s="div",...r},n)=>{const o=l.useMemo(()=>({controlId:e}),[e]);return t.jsx(v.Provider,{value:o,children:t.jsx(s,{...r,ref:n})})});U.displayName="FormGroup";const Y=l.forwardRef(({as:e="label",bsPrefix:s,column:r=!1,visuallyHidden:n=!1,className:o,htmlFor:a,...i},p)=>{const{controlId:u}=l.useContext(v);s=N(s,"form-label");let d="col-form-label";typeof r=="string"&&(d=`${d} ${d}-${r}`);const C=g(o,s,n&&"visually-hidden",r&&d);return a=a||u,r?t.jsx(A,{ref:p,as:"label",className:C,htmlFor:a,...i}):t.jsx(e,{ref:p,className:C,htmlFor:a,...i})});Y.displayName="FormLabel";const J=l.forwardRef(({bsPrefix:e,className:s,id:r,...n},o)=>{const{controlId:a}=l.useContext(v);return e=N(e,"form-range"),t.jsx("input",{...n,type:"range",ref:o,className:g(s,e),id:r||a})});J.displayName="FormRange";const X=l.forwardRef(({bsPrefix:e,size:s,htmlSize:r,className:n,isValid:o=!1,isInvalid:a=!1,id:i,...p},u)=>{const{controlId:d}=l.useContext(v);return e=N(e,"form-select"),t.jsx("select",{...p,size:r,ref:u,className:g(n,e,s&&`${e}-${s}`,o&&"is-valid",a&&"is-invalid"),id:i||d})});X.displayName="FormSelect";const Z=l.forwardRef(({bsPrefix:e,className:s,as:r="small",muted:n,...o},a)=>(e=N(e,"form-text"),t.jsx(r,{...o,ref:a,className:g(s,e,n&&"text-muted")})));Z.displayName="FormText";const z=l.forwardRef((e,s)=>t.jsx(q,{...e,ref:s,type:"switch"}));z.displayName="Switch";const we=Object.assign(z,{Input:q.Input,Label:q.Label}),ee=l.forwardRef(({bsPrefix:e,className:s,children:r,controlId:n,label:o,...a},i)=>(e=N(e,"form-floating"),t.jsxs(U,{ref:i,className:g(s,e),controlId:n,...a,children:[r,t.jsx("label",{htmlFor:n,children:o})]})));ee.displayName="FloatingLabel";const be={_ref:k.any,validated:k.bool,as:k.elementType},D=l.forwardRef(({className:e,validated:s,as:r="form",...n},o)=>t.jsx(r,{...n,ref:o,className:g(e,s&&"was-validated")}));D.displayName="Form";D.propTypes=be;const b=Object.assign(D,{Group:U,Control:ve,Floating:Q,Check:q,Switch:we,Label:Y,Text:Z,Range:J,Select:X,FloatingLabel:ee}),te=l.forwardRef(({bsPrefix:e,variant:s,animation:r="border",size:n,as:o="div",className:a,...i},p)=>{e=N(e,"spinner");const u=`${e}-${r}`;return t.jsx(o,{ref:p,...i,className:g(a,u,n&&`${u}-${n}`,s&&`text-${s}`)})});te.displayName="Spinner";const Se=()=>{const[e,s]=l.useState(!1),[r,n]=l.useState([]),[o,a]=l.useState([]),{data:i}=ne(),[p,{isSuccess:u,isLoading:d}]=oe(),[C,{isSuccess:w,isLoading:x}]=ae(),[$,{isSuccess:L,isLoading:S}]=ce(),[m,T]=l.useState(),f=ie({enableReinitialize:!0,initialValues:{name:m?m.name:"",price:m?m.price:"",description:m?m.description:"",productImg:m?m.productImg:"",quantity:m?m.quantity:""},validationSchema:de({name:E().required("Enter Name"),price:E().required("Enter price"),description:E().required("Enter description"),quantity:E().required("Enter quantity")}),onSubmit:(c,{resetForm:y})=>{if(m){const h=new FormData;for(const j in c)j!=="productImg"&&h.append(j,c[j]);for(const j of r)h.append("remove",j);for(const j of c.productImg)h.append("productImg",j);C({_id:m._id,fd:h}),T(null)}else{const h=new FormData;for(const j in c)j!=="productImg"&&h.append(j,c[j]);for(const j of c.productImg)h.append("productImg",j);p(h)}a([]),y()}});return l.useEffect(()=>{u&&le.success("product create success")},[u]),t.jsxs(t.Fragment,{children:[t.jsx(B,{children:d||S||x?t.jsxs(t.Fragment,{children:["Please wait...",t.jsx(te,{})]}):t.jsxs(R,{children:[t.jsx(R.Header,{children:" Proctuct Detail"}),t.jsx(R.Body,{children:t.jsx(b,{onSubmit:f.handleSubmit,children:t.jsxs(b.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[t.jsx(b.Control,{...f.getFieldProps("name"),className:I(f,"name"),type:"text",placeholder:"Enter Product"}),t.jsx("span",{className:"invalid-feedback",children:f.errors.name}),t.jsx(b.Control,{...f.getFieldProps("price"),className:I(f,"price"),type:"number",placeholder:"Enter price"}),t.jsx("span",{className:"invalid-feedback",children:f.errors.price}),t.jsx(b.Control,{...f.getFieldProps("description"),className:I(f,"description"),type:"text",placeholder:"Enter description"}),t.jsx("span",{className:"invalid-feedback",children:f.errors.description}),m?t.jsxs(t.Fragment,{children:[m.productImg.map(c=>t.jsx("div",{children:t.jsxs("div",{className:`${r.includes(c)&&"border border-danger my-2"} d-flex align-items-center justify-content-between px-4`,children:[t.jsx("img",{src:c,height:100,className:"me-2 rounded-3"}),r.includes(c)?t.jsx(F,{variant:"dark",onClick:y=>n(r.filter(h=>h!==c)),children:"Cancel"}):t.jsx(F,{onClick:y=>{r.includes(c)||n([...r,c])},children:"Remove"})]})})),e?t.jsxs(t.Fragment,{children:[t.jsx(b.Control,{className:I(f,"productImg"),type:"file",multiple:!0,onChange:c=>{const y=[];for(const h of c.target.files)y.push(URL.createObjectURL(h));f.setFieldValue("productImg",c.target.files),a(y)},placeholder:"Enter new productImg"}),t.jsx(F,{onClick:c=>s(null),className:"me-2",children:"Cancel"})]}):t.jsx(F,{onClick:c=>s(!0),className:"me-2",children:"Add new Image"})]}):t.jsxs(t.Fragment,{children:[t.jsx(b.Control,{className:I(f,"productImg"),type:"file",multiple:!0,onChange:c=>{const y=[];for(const h of c.target.files)y.push(URL.createObjectURL(h));f.setFieldValue("productImg",c.target.files),a(y)},placeholder:"Enter productImg"}),o.map(c=>t.jsx("img",{src:c,height:50}))]}),t.jsx(b.Control,{...f.getFieldProps("quantity"),className:I(f,"quantity"),type:"number",placeholder:"Enter quantity"}),t.jsx("span",{className:"invalid-feedback",children:f.errors.quantity}),m?t.jsxs(t.Fragment,{children:[t.jsx(F,{className:"w-100 mb-2",variant:"warning",type:"submit",children:"Update product"}),t.jsx(F,{className:"w-100",variant:"outline-dark",type:"button",onClick:c=>T(null),children:"Cancel"})]}):t.jsx(F,{variant:"info",type:"submit",children:"Add product"})]})})})]})}),t.jsx(B,{children:t.jsx(pe,{children:t.jsx(A,{children:t.jsxs(R,{children:[t.jsx(R.Header,{children:"All Products"}),t.jsx(R.Body,{children:t.jsxs("table",{className:"table table-striped table-hover",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"name"}),t.jsx("th",{scope:"col",children:"price"}),t.jsx("th",{scope:"col",children:"description"}),t.jsx("th",{scope:"col",children:"productImg"}),t.jsx("th",{scope:"col",children:"quantity"}),t.jsx("th",{scope:"col",children:"actions"})]})}),t.jsx("tbody",{children:i&&i.result.map(c=>t.jsxs("tr",{children:[t.jsx("td",{children:c.name}),t.jsx("td",{children:c.price}),t.jsx("td",{children:c.description}),t.jsx("td",{children:c.productImg.map(y=>t.jsx("img",{src:y,height:50,className:"mx-2 rounded"}))}),t.jsx("td",{children:c.quantity}),t.jsxs("td",{children:[t.jsx(F,{className:"me-2",variant:"warning",onClick:y=>T(c),children:"Edit"}),t.jsx(F,{className:"me-2",variant:"danger",onClick:()=>$(c._id),children:"Delete"})]})]},c._id))})]})})]})})})})]})};export{Se as default};
