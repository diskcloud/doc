---
layout: doc
---

# 文件相关 API

## 文件删除


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files/:id

#### 请求方式

> DELETE

#### Content-Type

> none

#### 路径变量

| 参数名 | 示例值                               | 参数描述 |
| ------ | ------------------------------------ | -------- |
| id     | 674f729b-d9e6-41f4-9d13-974f96498945 | -        |

#### 认证方式

```text
bearer
```

#### 成功响应示例

```javascript
{
}
```

## 文件信息


#### 接口状态

> 已完成

#### 接口 URL

> http://localhost:3000/files/:id

#### 请求方式

> GET

#### Content-Type

> form-data

#### 请求 Header 参数

| 参数名 | 示例值                               | 参数类型 | 是否必填 | 参数描述 |
| ------ | ------------------------------------ | -------- | -------- | -------- |
| id     | 021e8aa1-8a79-46b1-b363-db1da251a6d9 | String   | 是       | -        |

#### 路径变量

| 参数名 | 示例值                               | 参数描述 |
| ------ | ------------------------------------ | -------- |
| id     | 021e8aa1-8a79-46b1-b363-db1da251a6d9 | -        |

#### 认证方式

```text
bearer
```



#### 成功响应示例

```javascript
{
	"id": "623ba2b5-d96b-4153-b470-732f3a003db7",
	"filename": "623ba2b5-d96b-4153-b470-732f3a003db7.xlsx",
	"is_delete": false,
	"is_public": true,
	"public_expiration": null,
	"is_thumb": true,
	"file_size": 135309,
	"file_location": "http://localhost:3000/files/623ba2b5-d96b-4153-b470-732f3a003db7/preview",
	"thumb_location": "http://localhost:3000/files/623ba2b5-d96b-4153-b470-732f3a003db7/preview?type=thumb",
	"mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"ext": "xlsx",
	"created_at": "2024-06-25T13:45:32.000Z",
	"created_by": "anonymous",
	"updated_at": "2024-06-25T13:45:32.000Z",
	"updated_by": null
}
```

| 参数名            | 示例值                                                                              | 参数类型 | 参数描述 |
| ----------------- | ----------------------------------------------------------------------------------- | -------- | -------- |
| id                | 623ba2b5-d96b-4153-b470-732f3a003db7                                                | String   | -        |
| filename          | 623ba2b5-d96b-4153-b470-732f3a003db7.xlsx                                           | String   | -        |
| is_delete         | false                                                                               | Boolean  | -        |
| is_public         | true                                                                                | Boolean  | -        |
| public_expiration | null                                                                                | Null     | -        |
| is_thumb          | true                                                                                | Boolean  | -        |
| file_size         | 135309                                                                              | Integer  | -        |
| file_location     | http://localhost:3000/files/623ba2b5-d96b-4153-b470-732f3a003db7/preview            | String   | -        |
| thumb_location    | http://localhost:3000/files/623ba2b5-d96b-4153-b470-732f3a003db7/preview?type=thumb | String   | -        |
| mime              | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet                   | String   | -        |
| ext               | xlsx                                                                                | String   | -        |
| created_at        | 2024-06-25T13:45:32.000Z                                                            | String   | -        |
| created_by        | anonymous                                                                           | String   | -        |
| updated_at        | 2024-06-25T13:45:32.000Z                                                            | String   | -        |
| updated_by        | null                                                                                | Null     | -        |

#### 错误响应示例

```javascript
{
	"msg": "Please do not repeatedly initiate requests, they can be initiated again after two minutes."
}
```

## 文件批量删除


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files

#### 请求方式

> DELETE

#### Content-Type

> json

#### 请求 Body 参数

```javascript
{
    "ids": [
        "51be2bc2-4f26-49c7-b1d9-c29122a1bef7"
    ]
}
```

#### 认证方式

```text
noauth
```



## 文件批量导出


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files/download

#### 请求方式

> POST

#### Content-Type

> json

#### 请求 Body 参数

```javascript
{
    "ids": ["ddff9cba-c3f2-4a16-96b6-e1e44c10862e", "198ca3fa-281f-4059-aa6b-ead8b5d7b8a3"]
}
```

#### 认证方式

```text
bearer
```



## 文件更新


#### 接口状态

> 已完成

#### 接口 URL

> http://localhost:3000/files/:id

#### 请求方式

> PUT

#### Content-Type

> json

#### 路径变量

| 参数名 | 示例值                               | 参数描述 |
| ------ | ------------------------------------ | -------- |
| id     | ddff9cba-c3f2-4a16-96b6-e1e44c10862e | -        |

#### 请求 Body 参数

```javascript
{
	"filename": "测试文件.xlsx",
	"is_public": true,
	"public_expiration": null,
    "public_by": null,
	"updated_by": null
}
```

#### 认证方式

```text
bearer
```



#### 成功响应示例

```javascript
{
	"id": "ddff9cba-c3f2-4a16-96b6-e1e44c10862e",
	"filename": "测试文件.xlsx",
	"file_size": 7397780,
	"file_location": "http://localhost:3000/files/ddff9cba-c3f2-4a16-96b6-e1e44c10862e/preview",
	"created_by": "1",
	"created_at": "2024-07-07T07:25:05.000Z",
	"updated_by": 1,
	"updated_at": "2024-07-07T07:47:48.398Z",
	"is_public": true,
	"public_expiration": null,
	"public_by": null,
	"is_thumb": true,
	"thumb_location": "http://localhost:3000/files/ddff9cba-c3f2-4a16-96b6-e1e44c10862e/preview?type=thumb",
	"is_deleted": false,
	"deleted_at": null,
	"deleted_by": null,
	"real_file_location": "/Users/yanjiahui/Desktop/sourceCode/diskcloud/service/resource/ddff9cba-c3f2-4a16-96b6-e1e44c10862e.mov",
	"real_file_thumb_location": "/Users/yanjiahui/Desktop/sourceCode/diskcloud/service/public/icons/video.png",
	"mime": "video/quicktime",
	"ext": "mov"
}
```

| 参数名                   | 示例值                                                                                                  | 参数类型 | 参数描述 |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | -------- | -------- |
| id                       | ddff9cba-c3f2-4a16-96b6-e1e44c10862e                                                                    | String   | -        |
| filename                 | 测试文件.xlsx                                                                                           | String   | -        |
| file_size                | 7397780                                                                                                 | Integer  | -        |
| file_location            | http://localhost:3000/files/ddff9cba-c3f2-4a16-96b6-e1e44c10862e/preview                                | String   | -        |
| created_by               | 1                                                                                                       | String   | -        |
| created_at               | 2024-07-07T07:25:05.000Z                                                                                | String   | -        |
| updated_by               | 1                                                                                                       | Integer  | -        |
| updated_at               | 2024-07-07T07:47:48.398Z                                                                                | String   | -        |
| is_public                | true                                                                                                    | Boolean  | -        |
| public_expiration        | null                                                                                                    | Null     | -        |
| public_by                | null                                                                                                    | Null     | -        |
| is_thumb                 | true                                                                                                    | Boolean  | -        |
| thumb_location           | http://localhost:3000/files/ddff9cba-c3f2-4a16-96b6-e1e44c10862e/preview?type=thumb                     | String   | -        |
| is_deleted               | false                                                                                                   | Boolean  | -        |
| deleted_at               | null                                                                                                    | Null     | -        |
| deleted_by               | null                                                                                                    | Null     | -        |
| real_file_location       | /Users/yanjiahui/Desktop/sourceCode/diskcloud/service/resource/ddff9cba-c3f2-4a16-96b6-e1e44c10862e.mov | String   | -        |
| real_file_thumb_location | /Users/yanjiahui/Desktop/sourceCode/diskcloud/service/public/icons/video.png                            | String   | -        |
| mime                     | video/quicktime                                                                                         | String   | -        |
| ext                      | mov                                                                                                     | String   | -        |

## 文件导出


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files/:id/download

#### 请求方式

> GET

#### Content-Type

> none

#### 路径变量

| 参数名 | 示例值                               | 参数描述 |
| ------ | ------------------------------------ | -------- |
| id     | 021e8aa1-8a79-46b1-b363-db1da251a6d9 | -        |

#### 认证方式

```text
bearer
```



#### 成功响应示例

```javascript
{
}
```

## 文件上传


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files?type=md

#### 请求方式

> POST

#### Content-Type

> form-data

#### 请求 Query 参数

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| ------ | ------ | -------- | -------- | -------- |
| type   | md     | String   | 是       | -        |

#### 请求 Body 参数

| 参数名 | 示例值                                                                      | 参数类型 | 是否必填 | 参数描述 |
| ------ | --------------------------------------------------------------------------- | -------- | -------- | -------- |
| file   | ["/Users/yanjiahui/Downloads/0fa5b3eb-ecdc-400a-9e1b-b85b5cdd0113 (3).mov"] | String   | 是       | -        |
| file   | ["/Users/yanjiahui/Downloads/study_HZKL2x.zip"]                             | String   | 是       | -        |
| file   | ["/Users/yanjiahui/Downloads/支架自攻螺丝分布.png"]                         | String   | 是       | -        |

#### 认证方式

```text
bearer
```



#### 成功响应示例

```javascript
[
  {
    filepath:
      "http://localhost:3000/files/2964d036-bb7d-4bbb-97aa-fec511403ade/preview",
  },
  {
    filepath:
      "http://localhost:3000/files/ddfebf10-fc98-47e8-9ef8-26aa720e7467/preview",
  },
  {
    filepath:
      "![7155dc27-46cb-4853-81a2-efb2c9397003.png](http://localhost:3000/files/7155dc27-46cb-4853-81a2-efb2c9397003/preview)",
  },
];
```

| 参数名   | 示例值                                                                   | 参数类型 | 参数描述 |
| -------- | ------------------------------------------------------------------------ | -------- | -------- |
| filepath | http://localhost:3000/files/2964d036-bb7d-4bbb-97aa-fec511403ade/preview | String   | -        |

## 文件列表


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/files

#### 请求方式

> GET

#### Content-Type

> none

#### 认证方式

```text
bearer
```


