# 用户相关 API

## 用户信息


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/users/info

#### 请求方式

> GET

#### Content-Type

> none

#### 认证方式

```text
bearer
```



#### 成功响应示例

```javascript
{
	"id": 1,
	"username": "root",
	"mail": null,
	"verify_email": null,
	"status": "ACTIVE",
	"created_at": "2024-07-06T15:08:44.000Z",
	"created_by": null,
	"is_login": true,
	"login_at": "2024-07-07T07:39:30.000Z",
	"logout_at": null,
	"disk_size": "100 MB",
	"used_capacity": 94219170,
	"is_admin": false
}
```

| 参数名        | 示例值                   | 参数类型 | 参数描述 |
| ------------- | ------------------------ | -------- | -------- |
| id            | 1                        | Integer  | -        |
| username      | root                     | String   | -        |
| mail          | null                     | Null     | -        |
| verify_email  | null                     | Null     | -        |
| status        | ACTIVE                   | String   | -        |
| created_at    | 2024-07-06T15:08:44.000Z | String   | -        |
| created_by    | null                     | Null     | -        |
| is_login      | true                     | Boolean  | -        |
| login_at      | 2024-07-07T07:39:30.000Z | String   | -        |
| logout_at     | null                     | Null     | -        |
| disk_size     | 100 MB                   | String   | -        |
| used_capacity | 94219170                 | Integer  | -        |
| is_admin      | false                    | Boolean  | -        |

## 用户登出


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/

#### 请求方式

> DELETE

#### Content-Type

> none

#### 认证方式

```text
bearer
```



## 用户登录


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/sessions

#### 请求方式

> POST

#### Content-Type

> json

#### 请求 Body 参数

```javascript
{
    "username": "root",
    "password": "123456"
}
```

#### 认证方式

```text
noauth
```



#### 成功响应示例

```javascript
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNzIwMzM3OTcwLCJleHAiOjE3MjAzNDE1NzB9.Fbfj5TG3l8C1mbBqCHpGKGlyzwPNPVtZKfCYHuTlm-M"
}
```

| 参数名 | 示例值                                                                                                                                                            | 参数类型 | 参数描述 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| token  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNzIwMzM3OTcwLCJleHAiOjE3MjAzNDE1NzB9.Fbfj5TG3l8C1mbBqCHpGKGlyzwPNPVtZKfCYHuTlm-M | String   | -        |

## 用户注册


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/users

#### 请求方式

> POST

#### Content-Type

> json

#### 请求 Body 参数

```javascript
{
    "username": "yanjiahui",
    "password": "123456"
}
```

| 参数名   | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| -------- | ------ | -------- | -------- | -------- |
| username | root   | String   | 是       | -        |
| password | 123456 | String   | 是       | -        |

#### 认证方式

```text
noauth
```



#### 成功响应示例

```javascript
{
	"id": 2,
	"disk_size": "100 MB",
	"status": "ACTIVE",
	"created_at": "2024-07-07T07:49:14.057Z",
	"username": "yanjiahui"
}
```

| 参数名     | 示例值                   | 参数类型 | 参数描述 |
| ---------- | ------------------------ | -------- | -------- |
| id         | 2                        | Integer  | -        |
| disk_size  | 100 MB                   | String   | -        |
| status     | ACTIVE                   | String   | -        |
| created_at | 2024-07-07T07:49:14.057Z | String   | -        |
| username   | yanjiahui                | String   | -        |

## 用户更新


#### 接口状态

> 开发中

#### 接口 URL

> http://localhost:3000/users/:id/:action

#### 请求方式

> PATCH

#### Content-Type

> none

#### 路径变量

| 参数名 | 示例值   | 参数描述 |
| ------ | -------- | -------- |
| id     | 1        | -        |
| action | disabled | -        |

#### 认证方式

```text
bearer
```


