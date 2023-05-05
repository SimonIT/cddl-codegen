"use strict";(self.webpackChunkcddl_codegen_documentation=self.webpackChunkcddl_codegen_documentation||[]).push([[503],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var r=t(7294);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,u=function(n,e){if(null==n)return{};var t,r,u={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(u[t]=n[t])}return u}var p=r.createContext({}),o=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=o(n.components);return r.createElement(p.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,u=n.mdxType,a=n.originalType,p=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),c=o(t),d=u,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,l(l({ref:e},s),{},{components:t})):r.createElement(f,l({ref:e},s))}));function f(n,e){var t=arguments,u=e&&e.mdxType;if("string"==typeof n||u){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[c]="string"==typeof n?n:u,l[1]=i;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8131:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=t(7462),u=(t(7294),t(3905));t(2389);const a={sidebar_position:7},l="Examples",i={unversionedId:"examples",id:"examples",title:"Examples",description:"Aliases",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/cddl-codegen/examples",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Comment DSL",permalink:"/cddl-codegen/comment_dsl"}},p={},o=[{value:"Aliases",id:"aliases",level:2},{value:"input",id:"input",level:4},{value:"output",id:"output",level:4},{value:"input",id:"input-1",level:4},{value:"output",id:"output-1",level:4},{value:"input",id:"input-2",level:4},{value:"output",id:"output-2",level:4},{value:"Size/length requirements on primitives",id:"sizelength-requirements-on-primitives",level:2},{value:"input",id:"input-3",level:4},{value:"output",id:"output-3",level:4},{value:"Array struct",id:"array-struct",level:2},{value:"input",id:"input-4",level:4},{value:"output",id:"output-4",level:4},{value:"Mark as externally defined.",id:"mark-as-externally-defined",level:2},{value:"input",id:"input-5",level:4},{value:"output",id:"output-5",level:4},{value:"Map struct",id:"map-struct",level:2},{value:"input",id:"input-6",level:4},{value:"output",id:"output-6",level:4},{value:"Basic groups",id:"basic-groups",level:2},{value:"input",id:"input-7",level:4},{value:"output",id:"output-7",level:4},{value:"input",id:"input-8",level:4},{value:"output",id:"output-8",level:4},{value:"Type Choices",id:"type-choices",level:2},{value:"input",id:"input-9",level:4},{value:"output",id:"output-9",level:4},{value:"input",id:"input-10",level:4},{value:"output",id:"output-10",level:4}],s={toc:o},c="wrapper";function m(n){let{components:e,...t}=n;return(0,u.kt)(c,(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"examples"},"Examples"),(0,u.kt)("h2",{id:"aliases"},"Aliases"),(0,u.kt)("p",null,"Type alias"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"hash = bytes\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"hash = bytes\n")),(0,u.kt)("h4",{id:"output"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"pub type Hash = Vec<u8>;\n")))),(0,u.kt)("p",null,"Create a newtype around another type instead of an alias"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"special_hash = bytes ; @newtype\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-1"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"special_hash = bytes ; @newtype\n")),(0,u.kt)("h4",{id:"output-1"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct SpecialHash(pub Vec<u8>);\n\nimpl SpecialHash {\n    pub fn get(&self) -> &Vec<u8> {\n        &self.0\n    }\n\n    pub fn new(inner: Vec<u8>) -> Self {\n        Self(inner)\n    }\n}\n\nimpl From<Vec<u8>> for SpecialHash {\n    fn from(inner: Vec<u8>) -> Self {\n        SpecialHash::new(inner)\n    }\n}\n\nimpl From<SpecialHash> for Vec<u8> {\n    fn from(wrapper: SpecialHash) -> Self {\n        wrapper.0\n    }\n}\n")))),(0,u.kt)("p",null,"or don't generate either and directly use the aliased type instead"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"hidden_hash = bytes ; @no_alias\n\nhashes = [\n  hash,\n  special_hash,\n  hidden_hash,\n]\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-2"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"hash = bytes\nspecial_hash = bytes ; @newtype\nhidden_hash = bytes ; @no_alias\n\nhashes = [\n  hash,\n  special_hash,\n  hidden_hash,\n]\n")),(0,u.kt)("h4",{id:"output-2"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"pub type Hash = Vec<u8>;\n\n#[derive(Clone, Debug)]\npub struct Hashes {\n    pub hash: Hash,\n    pub special_hash: SpecialHash,\n    pub hidden_hash: Vec<u8>,\n}\n\nimpl Hashes {\n    pub fn new(hash: Hash, special_hash: SpecialHash, hidden_hash: Vec<u8>) -> Self {\n        Self {\n            hash,\n            special_hash,\n            hidden_hash,\n        }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct SpecialHash(pub Vec<u8>);\n\nimpl SpecialHash {\n    pub fn get(&self) -> &Vec<u8> {\n        &self.0\n    }\n\n    pub fn new(inner: Vec<u8>) -> Self {\n        Self(inner)\n    }\n}\n\nimpl From<Vec<u8>> for SpecialHash {\n    fn from(inner: Vec<u8>) -> Self {\n        SpecialHash::new(inner)\n    }\n}\n\nimpl From<SpecialHash> for Vec<u8> {\n    fn from(wrapper: SpecialHash) -> Self {\n        wrapper.0\n    }\n}\n")))),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"pay attention to the @name comment placement as it can be finicky")),(0,u.kt)("h2",{id:"sizelength-requirements-on-primitives"},"Size/length requirements on primitives"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"limitations = [\n    u_8: uint .size 1,\n    u_16: uint .le 65535,\n    u_32: 0..4294967295,\n    u_64: uint .size 8,\n    i_8: -128..127,\n    i_64: int .size 8,\n    hash32: bytes .size 32,\n    bounded: text .size (10..20),\n]\n\n")),(0,u.kt)("p",null,"Integer restrictions that map to rust types are directly translated"),(0,u.kt)("p",null,"u8 in rust"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"u_8: uint .size 1\n")),(0,u.kt)("p",null,"u16 in rust"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"u_16: uint .le 65535\n")),(0,u.kt)("p",null,"u32, etc..."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"u_32: 0..4294967295\nu_64: uint .size 8\ni_8: -128..127\ni_64: int .size 8\n\n")),(0,u.kt)("p",null,"One can also limit strings (text or bytes) to a specific length"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"hash32: bytes .size 32\n")),(0,u.kt)("p",null,"or to a range e.g. between 10 and 20 bytes"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"bounded: text .size (10..20)\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-3"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"limitations = [\n    u_8: uint .size 1,\n    u_16: uint .le 65535,\n    u_32: 0..4294967295,\n    u_64: uint .size 8,\n    i_8: -128..127,\n    i_64: int .size 8,\n    hash32: bytes .size 32,\n    bounded: text .size (10..20),\n]\n")),(0,u.kt)("h4",{id:"output-3"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct Limitations {\n    pub u_8: u8,\n    pub u_16: u16,\n    pub u_32: u32,\n    pub u_64: u64,\n    pub i_8: i8,\n    pub i_64: i64,\n    pub hash32: Vec<u8>,\n    pub bounded: String,\n}\n\nimpl Limitations {\n    pub fn new(\n        u_8: u8,\n        u_16: u16,\n        u_32: u32,\n        u_64: u64,\n        i_8: i8,\n        i_64: i64,\n        hash32: Vec<u8>,\n        bounded: String,\n    ) -> Self {\n        Self {\n            u_8,\n            u_16,\n            u_32,\n            u_64,\n            i_8,\n            i_64,\n            hash32,\n            bounded,\n        }\n    }\n}\n")))),(0,u.kt)("h2",{id:"array-struct"},"Array struct"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"foo = [\n  int,\n  name: text,\n  fp: float64,\n]\n\n")),(0,u.kt)("p",null,"All primitives are supported, e.g. uint, nint and int supported. int generates special code as no rust equivalent.\nUnnamed array fields try to derive name from type if possible:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  int\n")),(0,u.kt)("p",null,"Text/bytes is also supported, or one can give them an explicit name:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  name: text\n")),(0,u.kt)("p",null,"As well as floats (without --preserve-encodings=true)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  fp: float64\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-4"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"foo = [\n  int,\n  name: text,\n  fp: float64,\n]\n")),(0,u.kt)("h4",{id:"output-4"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug)]\npub struct Foo {\n    pub index_0: Int,\n    pub name: String,\n    pub fp: f64,\n}\n\nimpl Foo {\n    pub fn new(index_0: Int, name: String, fp: f64) -> Self {\n        Self { index_0, name, fp }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum Int {\n    Uint(u64),\n    Nint(u64),\n}\n\nimpl Int {\n    pub fn new_uint(value: u64) -> Self {\n        Self::Uint(value)\n    }\n\n    /// * `value` - Value as encoded in CBOR - note: a negative `x` here would be `|x + 1|` due to CBOR\'s `nint` encoding e.g. to represent -5, pass in 4.\n    pub fn new_nint(value: u64) -> Self {\n        Self::Nint(value)\n    }\n}\n\nimpl std::fmt::Display for Int {\n    fn fmt(&self, f: &mut std::fmt::Formatter<\'_>) -> std::fmt::Result {\n        match self {\n            Self::Uint(x) => write!(f, "{}", x),\n            Self::Nint(x) => write!(f, "-{}", x + 1),\n        }\n    }\n}\n\nimpl std::str::FromStr for Int {\n    type Err = IntError;\n\n    fn from_str(s: &str) -> Result<Self, Self::Err> {\n        let x = i128::from_str(s).map_err(IntError::Parsing)?;\n        Self::try_from(x).map_err(IntError::Bounds)\n    }\n}\n\nimpl TryFrom<i128> for Int {\n    type Error = std::num::TryFromIntError;\n\n    fn try_from(x: i128) -> Result<Self, Self::Error> {\n        if x >= 0 {\n            u64::try_from(x).map(Self::Uint)\n        } else {\n            u64::try_from((x + 1).abs()).map(Self::Nint)\n        }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum IntError {\n    Bounds(std::num::TryFromIntError),\n    Parsing(std::num::ParseIntError),\n}\n')))),(0,u.kt)("h2",{id:"mark-as-externally-defined"},"Mark as externally defined."),(0,u.kt)("p",null,"user has to insert/import code for this type after generation"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"extern_foo = _CDDL_CODEGEN_EXTERN_TYPE_\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-5"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"foo = _CDDL_CODEGEN_EXTERN_TYPE_\nbar = [\n    x: uint,\n    y: foo,\n]\n")),(0,u.kt)("h4",{id:"output-5"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct Bar {\n    pub x: u64,\n    pub y: Foo,\n}\n\nimpl Bar {\n    pub fn new(x: u64, y: Foo) -> Self {\n        Self { x, y }\n    }\n}\n")))),(0,u.kt)("h2",{id:"map-struct"},"Map struct"),(0,u.kt)("p",null,"Map struct + tagged fields + .cbor + optional fields + constants + .default"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'bar = {\n    foo: #6.1337(foo),\n  extern_foo: bytes .cbor extern_foo\n    ? derp: uint,\n    1 : uint / null, ; @name explicitly_named_1\n  ? 5: "five",\n    five: 5,\n  ? 100: uint .default 0,\n}\n')),(0,u.kt)("p",null,"Fields can be tagged and this remains a serialization detail (hidden from API)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  foo: #6.1337(foo),\n")),(0,u.kt)("p",null,"They can also be encoded as CBOR bytes which remains a serialization detail (hidden from API). This can be combined with tags as well i.e. #6.42(bytes .cbor extern_foo)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  extern_foo: bytes .cbor extern_foo\n")),(0,u.kt)("p",null,"Optional field (generates as ",(0,u.kt)("inlineCode",{parentName:"p"},"Option<T>"),")"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"    ? derp: uint,\n")),(0,u.kt)("p",null,"Type choice with null will result in ",(0,u.kt)("inlineCode",{parentName:"p"},"Option<T>")," too for the API. Also, you can give explicit names that differ from the key value for maps like this:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  1 : uint / null, ; @name explicitly_named_1\n")),(0,u.kt)("p",null,"Optional string constant (no field generated)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'  ? 5: "five",\n')),(0,u.kt)("p",null,"Integer constant (no field generated)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"    five: 5,\n")),(0,u.kt)("p",null,"This will not be an optional field in rust, as when it is not present, it will be set to 0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"  ? 100: uint .default 0,\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-6"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},'bar = {\n    foo: #6.1337(foo),\n    extern_foo: bytes .cbor extern_foo\n    ? derp: uint,\n    1 : uint / null, ; @name explicitly_named_1\n    ? 5: "five",\n    five: 5,\n    ? 100: uint .default 0,\n}\n')),(0,u.kt)("h4",{id:"output-6"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct Bar {\n    pub foo: Foo,\n    pub extern_foo: ExternFoo,\n    pub derp: Option<u64>,\n    pub explicitly_named_1: Option<u64>,\n    pub key_100: u64,\n}\n\nimpl Bar {\n    pub fn new(foo: Foo, extern_foo: ExternFoo, explicitly_named_1: Option<u64>) -> Self {\n        Self {\n            foo,\n            extern_foo,\n            derp: None,\n            explicitly_named_1,\n            key_100: 0,\n        }\n    }\n}\n")))),(0,u.kt)("h2",{id:"basic-groups"},"Basic groups"),(0,u.kt)("p",null,"Basic groups are supported and have their own type"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"basic = (\n  b: #6.23(uint),\n  c: text,\n)\n")),(0,u.kt)("p",null,"Basic groups are fully supported in array groups"),(0,u.kt)("p",null,"They can be put into an array struct directly i.e. embed their fields into outer, which is only a serialization detail. this field will be of type Basic;\nor one can embed them into a repeatable homogeneous array"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"outer = [\n  a: uint,\n  embedded: basic,\n  homogeneous_array: [* basic],\n]\n\nother_basic = (\n  b: uint,\n  c: uint,\n)\n")),(0,u.kt)("p",null,"Basic groups can be embeded in maps, BUT deserialization will not be generated due to technical limitations"),(0,u.kt)("admonition",{title:"limitation",type:"warning"},(0,u.kt)("p",{parentName:"admonition"},"A single basic group cannot be put into both a map and an array group for serialization which is\nwhy we had to define a separate one ",(0,u.kt)("inlineCode",{parentName:"p"},"other_basic")," instead of just using ",(0,u.kt)("inlineCode",{parentName:"p"},"basic"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"outer_map = {\n  a: uint,\n  embedded: other_basic,\n}\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-7"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"basic = (\n  b: #6.23(uint),\n  c: text,\n)\n\nouter = [\n  a: uint,\n  embedded: basic,\n  homogeneous_array: [* basic],\n]\n\nother_basic = (\n  b: uint,\n  c: uint,\n)\n\nouter_map = {\n  a: uint,\n  embedded: other_basic,\n}\n")),(0,u.kt)("h4",{id:"output-7"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct Basic {\n    pub b: u64,\n    pub c: String,\n}\n\nimpl Basic {\n    pub fn new(b: u64, c: String) -> Self {\n        Self { b, c }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct OtherBasic {\n    pub b: u64,\n    pub c: u64,\n}\n\nimpl OtherBasic {\n    pub fn new(b: u64, c: u64) -> Self {\n        Self { b, c }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct Outer {\n    pub a: u64,\n    pub embedded: Basic,\n    pub homogeneous_array: Vec<Basic>,\n}\n\nimpl Outer {\n    pub fn new(a: u64, embedded: Basic, homogeneous_array: Vec<Basic>) -> Self {\n        Self {\n            a,\n            embedded,\n            homogeneous_array,\n        }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct OuterMap {\n    pub a: u64,\n    pub embedded: OtherBasic,\n}\n\nimpl OuterMap {\n    pub fn new(a: u64, embedded: OtherBasic) -> Self {\n        Self { a, embedded }\n    }\n}\n")))),(0,u.kt)("p",null,"One can directly define homogeneous maps as fields (or define them at top-level).\nAlso define homogenous arrays as fields (or define them at top-level)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'table_arr_members = {\n    tab: { * text => text },\n    arr: [ * uint ],\n}\n\ntype_choice = \n    0              ; @name you\n  / "hello world"  ; @name can\n  / uint           ; @name name\n  / text           ; @name variants\n  / bytes          ; @name like\n  / #6.64([*uint]) ; @name this\n')),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-8"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},'table_arr_members = {\n    tab: { * text => text },\n    arr: [ * uint ],\n}\n\ntype_choice = \n    0              ; @name you\n  / "hello world"  ; @name can\n  / uint           ; @name name\n  / text           ; @name variants\n  / bytes          ; @name like\n  / #6.64([*uint]) ; @name this\n')),(0,u.kt)("h4",{id:"output-8"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct TableArrMembers {\n    pub tab: BTreeMap<String, String>,\n    pub arr: Vec<u64>,\n}\n\nimpl TableArrMembers {\n    pub fn new(tab: BTreeMap<String, String>, arr: Vec<u64>) -> Self {\n        Self { tab, arr }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum TypeChoice {\n    You,\n    Can,\n    Name(u64),\n    Variants(String),\n    Like(Vec<u8>),\n    This(Vec<u64>),\n}\n\nimpl TypeChoice {\n    pub fn new_you() -> Self {\n        Self::You\n    }\n\n    pub fn new_can() -> Self {\n        Self::Can\n    }\n\n    pub fn new_name(name: u64) -> Self {\n        Self::Name(name)\n    }\n\n    pub fn new_variants(variants: String) -> Self {\n        Self::Variants(variants)\n    }\n\n    pub fn new_like(like: Vec<u8>) -> Self {\n        Self::Like(like)\n    }\n\n    pub fn new_this(this: Vec<u64>) -> Self {\n        Self::This(this)\n    }\n}\n")))),(0,u.kt)("h2",{id:"type-choices"},"Type Choices"),(0,u.kt)("p",null,"If a type choice only has constants it will generate as a c-style enum (directly wasm-exposable)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"c_style_enum =\n    0 ; @name foo\n  / 1 ; @name bar\n  / 2 ; @name baz\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-9"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"c_style_enum =\n    0 ; @name foo\n  / 1 ; @name bar\n  / 2 ; @name baz\n")),(0,u.kt)("h4",{id:"output-9"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub enum CStyleEnum {\n    Foo,\n    Bar,\n    Baz,\n}\n\nimpl CStyleEnum {\n    pub fn new_foo() -> Self {\n        Self::Foo\n    }\n\n    pub fn new_bar() -> Self {\n        Self::Bar\n    }\n\n    pub fn new_baz() -> Self {\n        Self::Baz\n    }\n}\n\n")))),(0,u.kt)("p",null,"If there is only one non-constant field in the inlined group then that will be inlined in the enum, but if there are multiple then a new struct will be generated from this variant"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"group_choice = [\n  foo //                  ; @name these\n  0, x: uint //           ; @name are\n  1, x: uint, y: text //  ; @name also\n  basic                   ; @name nameable\n]\nchoices = [\n  type_choice,\n  c_style_enum,\n  group_choice,\n]\n")),(0,u.kt)("details",null,(0,u.kt)("summary",null,"See generated output"),(0,u.kt)("p",null,(0,u.kt)("h4",{id:"input-10"},"input"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},'foo = [\n  int,\n  name: text,\n  fp: float64,\n]\n\nbasic = (\n  b: #6.23(uint),\n  c: text,\n)\n\ntype_choice = \n    0              ; @name you\n  / "hello world"  ; @name can\n  / uint           ; @name name\n  / text           ; @name variants\n  / bytes          ; @name like\n  / #6.64([*uint]) ; @name this\n\nc_style_enum =\n    0 ; @name foo\n  / 1 ; @name bar\n  / 2 ; @name baz\n\ngroup_choice = [\n  foo //                  ; @name these\n  0, x: uint //           ; @name are\n  1, x: uint, y: text //  ; @name also\n  basic                   ; @name nameable\n]\nchoices = [\n  type_choice,\n  c_style_enum,\n  group_choice,\n]\n')),(0,u.kt)("h4",{id:"output-10"},"output"),(0,u.kt)("p",null,"(export/rust/src/lib.rs)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug)]\npub struct Are {\n    pub x: u64,\n    pub y: String,\n}\n\nimpl Are {\n    pub fn new(x: u64, y: String) -> Self {\n        Self { x, y }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct Basic {\n    pub b: u64,\n    pub c: String,\n}\n\nimpl Basic {\n    pub fn new(b: u64, c: String) -> Self {\n        Self { b, c }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum CStyleEnum {\n    Foo,\n    Bar,\n    Baz,\n}\n\nimpl CStyleEnum {\n    pub fn new_foo() -> Self {\n        Self::Foo\n    }\n\n    pub fn new_bar() -> Self {\n        Self::Bar\n    }\n\n    pub fn new_baz() -> Self {\n        Self::Baz\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct Choices {\n    pub type_choice: TypeChoice,\n    pub c_style_enum: CStyleEnum,\n    pub group_choice: GroupChoice,\n}\n\nimpl Choices {\n    pub fn new(\n        type_choice: TypeChoice,\n        c_style_enum: CStyleEnum,\n        group_choice: GroupChoice,\n    ) -> Self {\n        Self {\n            type_choice,\n            c_style_enum,\n            group_choice,\n        }\n    }\n}\n\n#[derive(Clone, Debug)]\npub struct Foo {\n    pub index_0: Int,\n    pub name: String,\n    pub fp: f64,\n}\n\nimpl Foo {\n    pub fn new(index_0: Int, name: String, fp: f64) -> Self {\n        Self { index_0, name, fp }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum GroupChoice {\n    Foo(Foo),\n    These(These),\n    Are(Are),\n    Basic(Basic),\n}\n\nimpl GroupChoice {\n    pub fn new_foo(index_0: Int, name: String, fp: f64) -> Self {\n        Self::Foo(Foo::new(index_0, name, fp))\n    }\n\n    pub fn new_these(x: u64) -> Self {\n        Self::These(These::new(x))\n    }\n\n    pub fn new_are(x: u64, y: String) -> Self {\n        Self::Are(Are::new(x, y))\n    }\n\n    pub fn new_basic(b: u64, c: String) -> Self {\n        Self::Basic(Basic::new(b, c))\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum Int {\n    Uint(u64),\n    Nint(u64),\n}\n\nimpl Int {\n    pub fn new_uint(value: u64) -> Self {\n        Self::Uint(value)\n    }\n\n    /// * `value` - Value as encoded in CBOR - note: a negative `x` here would be `|x + 1|` due to CBOR\'s `nint` encoding e.g. to represent -5, pass in 4.\n    pub fn new_nint(value: u64) -> Self {\n        Self::Nint(value)\n    }\n}\n\nimpl std::fmt::Display for Int {\n    fn fmt(&self, f: &mut std::fmt::Formatter<\'_>) -> std::fmt::Result {\n        match self {\n            Self::Uint(x) => write!(f, "{}", x),\n            Self::Nint(x) => write!(f, "-{}", x + 1),\n        }\n    }\n}\n\nimpl std::str::FromStr for Int {\n    type Err = IntError;\n\n    fn from_str(s: &str) -> Result<Self, Self::Err> {\n        let x = i128::from_str(s).map_err(IntError::Parsing)?;\n        Self::try_from(x).map_err(IntError::Bounds)\n    }\n}\n\nimpl TryFrom<i128> for Int {\n    type Error = std::num::TryFromIntError;\n\n    fn try_from(x: i128) -> Result<Self, Self::Error> {\n        if x >= 0 {\n            u64::try_from(x).map(Self::Uint)\n        } else {\n            u64::try_from((x + 1).abs()).map(Self::Nint)\n        }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum IntError {\n    Bounds(std::num::TryFromIntError),\n    Parsing(std::num::ParseIntError),\n}\n\n#[derive(Clone, Debug)]\npub struct These {\n    pub x: u64,\n}\n\nimpl These {\n    pub fn new(x: u64) -> Self {\n        Self { x }\n    }\n}\n\n#[derive(Clone, Debug)]\npub enum TypeChoice {\n    You,\n    Can,\n    Name(u64),\n    Variants(String),\n    Like(Vec<u8>),\n    This(Vec<u64>),\n}\n\nimpl TypeChoice {\n    pub fn new_you() -> Self {\n        Self::You\n    }\n\n    pub fn new_can() -> Self {\n        Self::Can\n    }\n\n    pub fn new_name(name: u64) -> Self {\n        Self::Name(name)\n    }\n\n    pub fn new_variants(variants: String) -> Self {\n        Self::Variants(variants)\n    }\n\n    pub fn new_like(like: Vec<u8>) -> Self {\n        Self::Like(like)\n    }\n\n    pub fn new_this(this: Vec<u64>) -> Self {\n        Self::This(this)\n    }\n}\n')))))}m.isMDXComponent=!0}}]);