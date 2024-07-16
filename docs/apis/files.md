---
layout: doc
---

# 文件相关 API

### 上传文件

|url|方法|认证|
|---|---|---|
|/api/files/upload|POST|是|

#### 参数说明

|参数|类型|说明|是否必传|参数格式|
|---|---|---|---|---|
|file|File|文件|是|multipart/form-data|

#### 返回值说明

|参数|类型|说明|
|---|---|---|
|data|string|文件地址|

## 下载文件

|url|方法|认证|
|---|---|---|
|/api/files/download|POST|是|
