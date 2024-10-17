# Fv
Mac

---

> pnpm create vue@latest

 Vue.js - The Progressive JavaScript Framework

>✔ Project name: … vue-project

>✔ Add TypeScript? … No / Yes

>✔ Add JSX Support? … No / Yes

>✔ Add Vue Router for Single Page Application development? … No / Yes

>✔ Add Pinia for state management? … No / Yes

>✔ Add Vitest for Unit Testing? … No / Yes

>✔ Add an End-to-End Testing Solution? › No

>✔ Add ESLint for code quality? … No / Yes

>✔ Add Prettier for code formatting? … No / Yes

>✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

### 解释每个命令的作用：

1. **`pnpm install`**：
    - 这个命令用于安装项目中的所有依赖包。它会根据 `package.json` 文件中的依赖列表下载并安装所需的依赖，并将它们放入 `node_modules` 目录中。
    - **作用**：确保你的项目具备运行所需的库和依赖项。
    - 通常在你克隆项目或初始化项目之后，都会运行这个命令。

2. **`pnpm format`**：
    - 这个命令一般用于代码格式化。通常它依赖于 Prettier 或 ESLint 等工具。
    - **作用**：自动格式化项目中的代码，确保所有代码都符合一致的风格。
    - 如果你的项目中配置了 Prettier，运行 `pnpm format` 将会格式化所有代码文件，确保代码缩进、空格、换行等格式保持一致。

3. **`pnpm dev`**：
    - 这是用于启动开发服务器的命令。该命令通常会启动一个本地开发服务器，并且在你修改代码时自动重新加载页面。
    - **作用**：启动本地开发环境，以便你实时查看项目的变化。
    - 通常会在 `localhost` 上运行，默认端口可能是 `3000` 或 `8080`，具体取决于项目配置。

### 命令顺序：

1. **`pnpm install`**：先安装依赖，确保项目中的所有库和插件都可以正常工作。
2. **`pnpm format`**：可选，确保项目的代码格式一致性，特别是在团队协作或严格遵守代码风格的项目中。
3. **`pnpm dev`**：启动本地开发服务器，你可以在浏览器中访问并查看项目的开发状态。

### 执行流程：

1. 在终端中导航到项目的根目录。
2. 依次运行这些命令，确保项目依赖安装完毕，代码格式化好，开发服务器启动：

```bash
pnpm install   # 安装依赖
pnpm format    # 格式化代码
pnpm dev       # 启动开发服务器
```

运行完毕后，你可以在本地开发并预览项目。

### 总结

- `pnpm install`：安装项目依赖。
- `pnpm format`：格式化代码（需要项目中配置 Prettier 或 ESLint）。
- `pnpm dev`：启动开发服务器，进入实时开发模式。


---

## Git 贡献提交规范

>feat 增加新功能

>fix 修复问题/BUG

>style 代码风格相关无影响运行结果的

>perf 优化/性能提升

>refactor 重构

>revert 撤销修改

>test 测试相关

>docs 文档/注释

>chore 依赖更新/脚手架配置修改等

>ci 持续集成

>types 类型定义文件更改

>wip 开发中