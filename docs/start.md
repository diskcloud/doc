# 快速开始

## Service 源码方式部署

> 目前支持 `Docker`、`源码`两种方式进行项目的部署

:::warning 注意
此项目依赖 `MySQL`、`Redis`、`Node.js`、`Yarn`、`Npm`，请确保运行环境依赖版本与之匹配。
:::

| Node     | Npm     | Yarn     | MySQL    | Redis   |
| -------- | ------- | -------- | -------- | ------- |
| >=18.0.0 | >=8.0.0 | >=1.22.0 | >=5.7.44 | >=7.2.4 |

### clone 仓库源码

```shell
git clone git@github.com:diskcloud/service.git
```

### 脚本启动项目

:::tip 提示
项目内置 setup.sh、setup.ps1 脚本，支持一键配置并启动项目，按照提示操作即可。让项目启动变得更加简单。
:::

#### Linux、MacOS

```shell
./scripts/setup.sh
```

#### windows

```shell
./scripts/setup.ps1
```

#### 脚本运行提示

```shell
Enter Tinify Key (optional): xxx
Enter Internal Network Domain [http://localhost:3000]:
Enter Public Network Domain [http://localhost:3000]:
Enter Server Port [3000]:
Enter Database Dialect [mysql]:
Enter MySQL Database Name: diskcloud
Enter MySQL Host: 127.0.0.1
Enter MySQL User [root]: diskcloud
Enter MySQL Password: xxx
Enter MySQL Port [3306]:
Enter Redis Host [127.0.0.1]:
Enter Redis Port [6379]:
Enter User Login Token Expire Time [3600]:
Enter JWT Expiry Time [1h]:
Enter JWT Secret: xxx
.env.local file has been created successfully.
Do you want to proceed with installation and startup? (y/n): y
Which package manager do you want to use? (yarn/npm): yarn
Using yarn to install dependencies...
yarn install v1.22.18
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.24s.
```

### 普通方式启动

:::tip 提示
也可以使用正常项目的启动方式，项目中依赖了 PM2、Nodemon，可以守护进程。
:::

#### 安装依赖

```shell
npm install
#OR
yarn install
```

#### 配置环境变量

> 此项目中含使用到了部分环境变量，所以需要在项目的根目录下（package.json同级）新建一个文件 `.env.local` 的文件，用于存放项目所需变量。

```env
TINIFY_KEY=
INTERNAL_NETWORK_DOMAIN=http://localhost:3000
PUBLIC_NETWORK_DOMAIN=http://localhost:3000
SERVER_PORT=3000
DIALECT=mysql
MYSQL_DATABASE=
MYSQL_HOST=
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_PORT=3306
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
USER_LOGIN_TOKEN_EXPIRE_TIME=3600
JWT_EXPIRES_IN=1h
JWT_SECRET=
```

#### 运行项目

```shell
# 开发环境
npm run dev
#OR
yarn dev

# 正式环境
npm run prod
#OR
yarn prod
```
