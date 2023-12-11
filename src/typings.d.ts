// typings.d.ts

declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  declare module '*.png' {
    const value: any;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: any;
    export default value;
  }
  
  // Extend NodeRequire interface to support require.context
  declare interface NodeRequire {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
      resolve(id: string): string;
    };
  }
  