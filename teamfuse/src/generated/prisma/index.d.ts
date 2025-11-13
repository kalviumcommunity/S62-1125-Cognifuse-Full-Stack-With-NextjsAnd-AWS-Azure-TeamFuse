/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model UserOAuth
 *
 */
export type UserOAuth = $Result.DefaultSelection<Prisma.$UserOAuthPayload>;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken =
  $Result.DefaultSelection<Prisma.$RefreshTokenPayload>;
/**
 * Model Project
 *
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>;
/**
 * Model ProjectMember
 *
 */
export type ProjectMember =
  $Result.DefaultSelection<Prisma.$ProjectMemberPayload>;
/**
 * Model Task
 *
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>;
/**
 * Model ChatMessage
 *
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>;
/**
 * Model GitHubActivity
 *
 */
export type GitHubActivity =
  $Result.DefaultSelection<Prisma.$GitHubActivityPayload>;
/**
 * Model GoogleDocsData
 *
 */
export type GoogleDocsData =
  $Result.DefaultSelection<Prisma.$GoogleDocsDataPayload>;
/**
 * Model Insight
 *
 */
export type Insight = $Result.DefaultSelection<Prisma.$InsightPayload>;
/**
 * Model Feedback
 *
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>;
/**
 * Model PresenceLog
 *
 */
export type PresenceLog = $Result.DefaultSelection<Prisma.$PresenceLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const PresenceStatus: {
    ONLINE: "ONLINE";
    IDLE: "IDLE";
    OFFLINE: "OFFLINE";
    FOCUSED: "FOCUSED";
  };

  export type PresenceStatus =
    (typeof PresenceStatus)[keyof typeof PresenceStatus];

  export const ProjectRole: {
    LEADER: "LEADER";
    MEMBER: "MEMBER";
  };

  export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole];

  export const TaskStatus: {
    PENDING: "PENDING";
    IN_PROGRESS: "IN_PROGRESS";
    COMPLETED: "COMPLETED";
  };

  export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

  export const TaskPriority: {
    LOW: "LOW";
    MEDIUM: "MEDIUM";
    HIGH: "HIGH";
  };

  export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];

  export const MemberStatus: {
    PENDING: "PENDING";
    ACCEPTED: "ACCEPTED";
    DECLINED: "DECLINED";
  };

  export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];
}

export type PresenceStatus = $Enums.PresenceStatus;

export const PresenceStatus: typeof $Enums.PresenceStatus;

export type ProjectRole = $Enums.ProjectRole;

export const ProjectRole: typeof $Enums.ProjectRole;

export type TaskStatus = $Enums.TaskStatus;

export const TaskStatus: typeof $Enums.TaskStatus;

export type TaskPriority = $Enums.TaskPriority;

export const TaskPriority: typeof $Enums.TaskPriority;

export type MemberStatus = $Enums.MemberStatus;

export const MemberStatus: typeof $Enums.MemberStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOAuth`: Exposes CRUD operations for the **UserOAuth** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserOAuths
   * const userOAuths = await prisma.userOAuth.findMany()
   * ```
   */
  get userOAuth(): Prisma.UserOAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProjectMembers
   * const projectMembers = await prisma.projectMember.findMany()
   * ```
   */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ChatMessages
   * const chatMessages = await prisma.chatMessage.findMany()
   * ```
   */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitHubActivity`: Exposes CRUD operations for the **GitHubActivity** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more GitHubActivities
   * const gitHubActivities = await prisma.gitHubActivity.findMany()
   * ```
   */
  get gitHubActivity(): Prisma.GitHubActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.googleDocsData`: Exposes CRUD operations for the **GoogleDocsData** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more GoogleDocsData
   * const googleDocsData = await prisma.googleDocsData.findMany()
   * ```
   */
  get googleDocsData(): Prisma.GoogleDocsDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insight`: Exposes CRUD operations for the **Insight** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insights
   * const insights = await prisma.insight.findMany()
   * ```
   */
  get insight(): Prisma.InsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Feedbacks
   * const feedbacks = await prisma.feedback.findMany()
   * ```
   */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presenceLog`: Exposes CRUD operations for the **PresenceLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PresenceLogs
   * const presenceLogs = await prisma.presenceLog.findMany()
   * ```
   */
  get presenceLog(): Prisma.PresenceLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    UserOAuth: "UserOAuth";
    RefreshToken: "RefreshToken";
    Project: "Project";
    ProjectMember: "ProjectMember";
    Task: "Task";
    ChatMessage: "ChatMessage";
    GitHubActivity: "GitHubActivity";
    GoogleDocsData: "GoogleDocsData";
    Insight: "Insight";
    Feedback: "Feedback";
    PresenceLog: "PresenceLog";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "userOAuth"
        | "refreshToken"
        | "project"
        | "projectMember"
        | "task"
        | "chatMessage"
        | "gitHubActivity"
        | "googleDocsData"
        | "insight"
        | "feedback"
        | "presenceLog";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      UserOAuth: {
        payload: Prisma.$UserOAuthPayload<ExtArgs>;
        fields: Prisma.UserOAuthFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserOAuthFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserOAuthFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          findFirst: {
            args: Prisma.UserOAuthFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserOAuthFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          findMany: {
            args: Prisma.UserOAuthFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>[];
          };
          create: {
            args: Prisma.UserOAuthCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          createMany: {
            args: Prisma.UserOAuthCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserOAuthCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>[];
          };
          delete: {
            args: Prisma.UserOAuthDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          update: {
            args: Prisma.UserOAuthUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          deleteMany: {
            args: Prisma.UserOAuthDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserOAuthUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserOAuthUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>[];
          };
          upsert: {
            args: Prisma.UserOAuthUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserOAuthPayload>;
          };
          aggregate: {
            args: Prisma.UserOAuthAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserOAuth>;
          };
          groupBy: {
            args: Prisma.UserOAuthGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserOAuthGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserOAuthCountArgs<ExtArgs>;
            result: $Utils.Optional<UserOAuthCountAggregateOutputType> | number;
          };
        };
      };
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>;
        fields: Prisma.RefreshTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRefreshToken>;
          };
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RefreshTokenCountAggregateOutputType>
              | number;
          };
        };
      };
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>;
        fields: Prisma.ProjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>;
        fields: Prisma.ProjectMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
          };
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
          };
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[];
          };
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>;
          };
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProjectMember>;
          };
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProjectMemberCountAggregateOutputType>
              | number;
          };
        };
      };
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>;
        fields: Prisma.TaskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask>;
          };
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskGroupByOutputType>[];
          };
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskCountAggregateOutputType> | number;
          };
        };
      };
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>;
        fields: Prisma.ChatMessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
          };
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
          };
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
          };
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
          };
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChatMessage>;
          };
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChatMessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ChatMessageCountAggregateOutputType>
              | number;
          };
        };
      };
      GitHubActivity: {
        payload: Prisma.$GitHubActivityPayload<ExtArgs>;
        fields: Prisma.GitHubActivityFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GitHubActivityFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GitHubActivityFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          findFirst: {
            args: Prisma.GitHubActivityFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GitHubActivityFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          findMany: {
            args: Prisma.GitHubActivityFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>[];
          };
          create: {
            args: Prisma.GitHubActivityCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          createMany: {
            args: Prisma.GitHubActivityCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GitHubActivityCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>[];
          };
          delete: {
            args: Prisma.GitHubActivityDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          update: {
            args: Prisma.GitHubActivityUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          deleteMany: {
            args: Prisma.GitHubActivityDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GitHubActivityUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GitHubActivityUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>[];
          };
          upsert: {
            args: Prisma.GitHubActivityUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GitHubActivityPayload>;
          };
          aggregate: {
            args: Prisma.GitHubActivityAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGitHubActivity>;
          };
          groupBy: {
            args: Prisma.GitHubActivityGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GitHubActivityGroupByOutputType>[];
          };
          count: {
            args: Prisma.GitHubActivityCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<GitHubActivityCountAggregateOutputType>
              | number;
          };
        };
      };
      GoogleDocsData: {
        payload: Prisma.$GoogleDocsDataPayload<ExtArgs>;
        fields: Prisma.GoogleDocsDataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GoogleDocsDataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GoogleDocsDataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          findFirst: {
            args: Prisma.GoogleDocsDataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GoogleDocsDataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          findMany: {
            args: Prisma.GoogleDocsDataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>[];
          };
          create: {
            args: Prisma.GoogleDocsDataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          createMany: {
            args: Prisma.GoogleDocsDataCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GoogleDocsDataCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>[];
          };
          delete: {
            args: Prisma.GoogleDocsDataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          update: {
            args: Prisma.GoogleDocsDataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          deleteMany: {
            args: Prisma.GoogleDocsDataDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GoogleDocsDataUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GoogleDocsDataUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>[];
          };
          upsert: {
            args: Prisma.GoogleDocsDataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GoogleDocsDataPayload>;
          };
          aggregate: {
            args: Prisma.GoogleDocsDataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoogleDocsData>;
          };
          groupBy: {
            args: Prisma.GoogleDocsDataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoogleDocsDataGroupByOutputType>[];
          };
          count: {
            args: Prisma.GoogleDocsDataCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<GoogleDocsDataCountAggregateOutputType>
              | number;
          };
        };
      };
      Insight: {
        payload: Prisma.$InsightPayload<ExtArgs>;
        fields: Prisma.InsightFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InsightFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InsightFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          findFirst: {
            args: Prisma.InsightFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InsightFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          findMany: {
            args: Prisma.InsightFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[];
          };
          create: {
            args: Prisma.InsightCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          createMany: {
            args: Prisma.InsightCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InsightCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[];
          };
          delete: {
            args: Prisma.InsightDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          update: {
            args: Prisma.InsightUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          deleteMany: {
            args: Prisma.InsightDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InsightUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InsightUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[];
          };
          upsert: {
            args: Prisma.InsightUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>;
          };
          aggregate: {
            args: Prisma.InsightAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsight>;
          };
          groupBy: {
            args: Prisma.InsightGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InsightGroupByOutputType>[];
          };
          count: {
            args: Prisma.InsightCountArgs<ExtArgs>;
            result: $Utils.Optional<InsightCountAggregateOutputType> | number;
          };
        };
      };
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>;
        fields: Prisma.FeedbackFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
          };
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>;
          };
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFeedback>;
          };
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FeedbackGroupByOutputType>[];
          };
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>;
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number;
          };
        };
      };
      PresenceLog: {
        payload: Prisma.$PresenceLogPayload<ExtArgs>;
        fields: Prisma.PresenceLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PresenceLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PresenceLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          findFirst: {
            args: Prisma.PresenceLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PresenceLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          findMany: {
            args: Prisma.PresenceLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>[];
          };
          create: {
            args: Prisma.PresenceLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          createMany: {
            args: Prisma.PresenceLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PresenceLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>[];
          };
          delete: {
            args: Prisma.PresenceLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          update: {
            args: Prisma.PresenceLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          deleteMany: {
            args: Prisma.PresenceLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PresenceLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PresenceLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>[];
          };
          upsert: {
            args: Prisma.PresenceLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PresenceLogPayload>;
          };
          aggregate: {
            args: Prisma.PresenceLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePresenceLog>;
          };
          groupBy: {
            args: Prisma.PresenceLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PresenceLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.PresenceLogCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PresenceLogCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    userOAuth?: UserOAuthOmit;
    refreshToken?: RefreshTokenOmit;
    project?: ProjectOmit;
    projectMember?: ProjectMemberOmit;
    task?: TaskOmit;
    chatMessage?: ChatMessageOmit;
    gitHubActivity?: GitHubActivityOmit;
    googleDocsData?: GoogleDocsDataOmit;
    insight?: InsightOmit;
    feedback?: FeedbackOmit;
    presenceLog?: PresenceLogOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    oauthAccounts: number;
    projectsCreated: number;
    memberships: number;
    messages: number;
    tasks: number;
    feedbackGiven: number;
    feedbackReceived: number;
    githubActivities: number;
    presenceLogs: number;
    refreshTokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs;
    projectsCreated?: boolean | UserCountOutputTypeCountProjectsCreatedArgs;
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    tasks?: boolean | UserCountOutputTypeCountTasksArgs;
    feedbackGiven?: boolean | UserCountOutputTypeCountFeedbackGivenArgs;
    feedbackReceived?: boolean | UserCountOutputTypeCountFeedbackReceivedArgs;
    githubActivities?: boolean | UserCountOutputTypeCountGithubActivitiesArgs;
    presenceLogs?: boolean | UserCountOutputTypeCountPresenceLogsArgs;
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserOAuthWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectMemberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChatMessageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackGivenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackReceivedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGithubActivitiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GitHubActivityWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresenceLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PresenceLogWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
  };

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    members: number;
    tasks: number;
    chatMessages: number;
    feedbacks: number;
    githubData: number;
    insights: number;
    presenceLogs: number;
  };

  export type ProjectCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs;
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs;
    chatMessages?: boolean | ProjectCountOutputTypeCountChatMessagesArgs;
    feedbacks?: boolean | ProjectCountOutputTypeCountFeedbacksArgs;
    githubData?: boolean | ProjectCountOutputTypeCountGithubDataArgs;
    insights?: boolean | ProjectCountOutputTypeCountInsightsArgs;
    presenceLogs?: boolean | ProjectCountOutputTypeCountPresenceLogsArgs;
  };

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectMemberWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountChatMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChatMessageWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFeedbacksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountGithubDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GitHubActivityWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInsightsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InsightWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPresenceLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PresenceLogWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    avatarUrl: string | null;
    oauthProvider: string | null;
    oauthId: string | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    avatarUrl: string | null;
    oauthProvider: string | null;
    oauthId: string | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    avatarUrl: number;
    oauthProvider: number;
    oauthId: number;
    createdAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    avatarUrl?: true;
    oauthProvider?: true;
    oauthId?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    avatarUrl?: true;
    oauthProvider?: true;
    oauthId?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    avatarUrl?: true;
    oauthProvider?: true;
    oauthId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
    oauthProvider: string;
    oauthId: string;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatarUrl?: boolean;
      oauthProvider?: boolean;
      oauthId?: boolean;
      createdAt?: boolean;
      oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>;
      projectsCreated?: boolean | User$projectsCreatedArgs<ExtArgs>;
      googleDocsData?: boolean | User$googleDocsDataArgs<ExtArgs>;
      memberships?: boolean | User$membershipsArgs<ExtArgs>;
      messages?: boolean | User$messagesArgs<ExtArgs>;
      tasks?: boolean | User$tasksArgs<ExtArgs>;
      feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>;
      feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>;
      githubActivities?: boolean | User$githubActivitiesArgs<ExtArgs>;
      presenceLogs?: boolean | User$presenceLogsArgs<ExtArgs>;
      refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatarUrl?: boolean;
      oauthProvider?: boolean;
      oauthId?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      avatarUrl?: boolean;
      oauthProvider?: boolean;
      oauthId?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    avatarUrl?: boolean;
    oauthProvider?: boolean;
    oauthId?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "avatarUrl"
    | "oauthProvider"
    | "oauthId"
    | "createdAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>;
    projectsCreated?: boolean | User$projectsCreatedArgs<ExtArgs>;
    googleDocsData?: boolean | User$googleDocsDataArgs<ExtArgs>;
    memberships?: boolean | User$membershipsArgs<ExtArgs>;
    messages?: boolean | User$messagesArgs<ExtArgs>;
    tasks?: boolean | User$tasksArgs<ExtArgs>;
    feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>;
    feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>;
    githubActivities?: boolean | User$githubActivitiesArgs<ExtArgs>;
    presenceLogs?: boolean | User$presenceLogsArgs<ExtArgs>;
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      oauthAccounts: Prisma.$UserOAuthPayload<ExtArgs>[];
      projectsCreated: Prisma.$ProjectPayload<ExtArgs>[];
      googleDocsData: Prisma.$GoogleDocsDataPayload<ExtArgs> | null;
      memberships: Prisma.$ProjectMemberPayload<ExtArgs>[];
      messages: Prisma.$ChatMessagePayload<ExtArgs>[];
      tasks: Prisma.$TaskPayload<ExtArgs>[];
      feedbackGiven: Prisma.$FeedbackPayload<ExtArgs>[];
      feedbackReceived: Prisma.$FeedbackPayload<ExtArgs>[];
      githubActivities: Prisma.$GitHubActivityPayload<ExtArgs>[];
      presenceLogs: Prisma.$PresenceLogPayload<ExtArgs>[];
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        avatarUrl: string | null;
        oauthProvider: string;
        oauthId: string;
        createdAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserOAuthPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    projectsCreated<T extends User$projectsCreatedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$projectsCreatedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    googleDocsData<T extends User$googleDocsDataArgs<ExtArgs> = {}>(
      args?: Subset<T, User$googleDocsDataArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$membershipsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectMemberPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    messages<T extends User$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$messagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ChatMessagePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tasksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    feedbackGiven<T extends User$feedbackGivenArgs<ExtArgs> = {}>(
      args?: Subset<T, User$feedbackGivenArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FeedbackPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    feedbackReceived<T extends User$feedbackReceivedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$feedbackReceivedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FeedbackPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    githubActivities<T extends User$githubActivitiesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$githubActivitiesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GitHubActivityPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    presenceLogs<T extends User$presenceLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$presenceLogsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PresenceLogPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$refreshTokensArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RefreshTokenPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly avatarUrl: FieldRef<"User", "String">;
    readonly oauthProvider: FieldRef<"User", "String">;
    readonly oauthId: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    where?: UserOAuthWhereInput;
    orderBy?:
      | UserOAuthOrderByWithRelationInput
      | UserOAuthOrderByWithRelationInput[];
    cursor?: UserOAuthWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserOAuthScalarFieldEnum | UserOAuthScalarFieldEnum[];
  };

  /**
   * User.projectsCreated
   */
  export type User$projectsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    where?: ProjectWhereInput;
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    cursor?: ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * User.googleDocsData
   */
  export type User$googleDocsDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    where?: GoogleDocsDataWhereInput;
  };

  /**
   * User.memberships
   */
  export type User$membershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    where?: ProjectMemberWhereInput;
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    cursor?: ProjectMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[];
  };

  /**
   * User.messages
   */
  export type User$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    where?: ChatMessageWhereInput;
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    cursor?: ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
  };

  /**
   * User.tasks
   */
  export type User$tasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    cursor?: TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * User.feedbackGiven
   */
  export type User$feedbackGivenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    where?: FeedbackWhereInput;
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    cursor?: FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * User.feedbackReceived
   */
  export type User$feedbackReceivedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    where?: FeedbackWhereInput;
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    cursor?: FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * User.githubActivities
   */
  export type User$githubActivitiesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    where?: GitHubActivityWhereInput;
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    cursor?: GitHubActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GitHubActivityScalarFieldEnum | GitHubActivityScalarFieldEnum[];
  };

  /**
   * User.presenceLogs
   */
  export type User$presenceLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    where?: PresenceLogWhereInput;
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    cursor?: PresenceLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PresenceLogScalarFieldEnum | PresenceLogScalarFieldEnum[];
  };

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    cursor?: RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model UserOAuth
   */

  export type AggregateUserOAuth = {
    _count: UserOAuthCountAggregateOutputType | null;
    _min: UserOAuthMinAggregateOutputType | null;
    _max: UserOAuthMaxAggregateOutputType | null;
  };

  export type UserOAuthMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    provider: string | null;
    providerUserId: string | null;
    accessTokenEnc: string | null;
    tokenExpiresAt: Date | null;
    scopes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserOAuthMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    provider: string | null;
    providerUserId: string | null;
    accessTokenEnc: string | null;
    tokenExpiresAt: Date | null;
    scopes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserOAuthCountAggregateOutputType = {
    id: number;
    userId: number;
    provider: number;
    providerUserId: number;
    accessTokenEnc: number;
    tokenExpiresAt: number;
    scopes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserOAuthMinAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerUserId?: true;
    accessTokenEnc?: true;
    tokenExpiresAt?: true;
    scopes?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserOAuthMaxAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerUserId?: true;
    accessTokenEnc?: true;
    tokenExpiresAt?: true;
    scopes?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserOAuthCountAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerUserId?: true;
    accessTokenEnc?: true;
    tokenExpiresAt?: true;
    scopes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserOAuthAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserOAuth to aggregate.
     */
    where?: UserOAuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserOAuths to fetch.
     */
    orderBy?:
      | UserOAuthOrderByWithRelationInput
      | UserOAuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserOAuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserOAuths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserOAuths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserOAuths
     **/
    _count?: true | UserOAuthCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserOAuthMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserOAuthMaxAggregateInputType;
  };

  export type GetUserOAuthAggregateType<T extends UserOAuthAggregateArgs> = {
    [P in keyof T & keyof AggregateUserOAuth]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOAuth[P]>
      : GetScalarType<T[P], AggregateUserOAuth[P]>;
  };

  export type UserOAuthGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserOAuthWhereInput;
    orderBy?:
      | UserOAuthOrderByWithAggregationInput
      | UserOAuthOrderByWithAggregationInput[];
    by: UserOAuthScalarFieldEnum[] | UserOAuthScalarFieldEnum;
    having?: UserOAuthScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserOAuthCountAggregateInputType | true;
    _min?: UserOAuthMinAggregateInputType;
    _max?: UserOAuthMaxAggregateInputType;
  };

  export type UserOAuthGroupByOutputType = {
    id: string;
    userId: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt: Date | null;
    scopes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserOAuthCountAggregateOutputType | null;
    _min: UserOAuthMinAggregateOutputType | null;
    _max: UserOAuthMaxAggregateOutputType | null;
  };

  type GetUserOAuthGroupByPayload<T extends UserOAuthGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserOAuthGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UserOAuthGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserOAuthGroupByOutputType[P]>;
        }
      >
    >;

  export type UserOAuthSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      provider?: boolean;
      providerUserId?: boolean;
      accessTokenEnc?: boolean;
      tokenExpiresAt?: boolean;
      scopes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userOAuth"]
  >;

  export type UserOAuthSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      provider?: boolean;
      providerUserId?: boolean;
      accessTokenEnc?: boolean;
      tokenExpiresAt?: boolean;
      scopes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userOAuth"]
  >;

  export type UserOAuthSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      provider?: boolean;
      providerUserId?: boolean;
      accessTokenEnc?: boolean;
      tokenExpiresAt?: boolean;
      scopes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userOAuth"]
  >;

  export type UserOAuthSelectScalar = {
    id?: boolean;
    userId?: boolean;
    provider?: boolean;
    providerUserId?: boolean;
    accessTokenEnc?: boolean;
    tokenExpiresAt?: boolean;
    scopes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOAuthOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "provider"
    | "providerUserId"
    | "accessTokenEnc"
    | "tokenExpiresAt"
    | "scopes"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["userOAuth"]
  >;
  export type UserOAuthInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserOAuthIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserOAuthIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserOAuthPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserOAuth";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        provider: string;
        providerUserId: string;
        accessTokenEnc: string;
        tokenExpiresAt: Date | null;
        scopes: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["userOAuth"]
    >;
    composites: {};
  };

  type UserOAuthGetPayload<
    S extends boolean | null | undefined | UserOAuthDefaultArgs,
  > = $Result.GetResult<Prisma.$UserOAuthPayload, S>;

  type UserOAuthCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserOAuthFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserOAuthCountAggregateInputType | true;
  };

  export interface UserOAuthDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserOAuth"];
      meta: { name: "UserOAuth" };
    };
    /**
     * Find zero or one UserOAuth that matches the filter.
     * @param {UserOAuthFindUniqueArgs} args - Arguments to find a UserOAuth
     * @example
     * // Get one UserOAuth
     * const userOAuth = await prisma.userOAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOAuthFindUniqueArgs>(
      args: SelectSubset<T, UserOAuthFindUniqueArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserOAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOAuthFindUniqueOrThrowArgs} args - Arguments to find a UserOAuth
     * @example
     * // Get one UserOAuth
     * const userOAuth = await prisma.userOAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOAuthFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserOAuthFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserOAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthFindFirstArgs} args - Arguments to find a UserOAuth
     * @example
     * // Get one UserOAuth
     * const userOAuth = await prisma.userOAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOAuthFindFirstArgs>(
      args?: SelectSubset<T, UserOAuthFindFirstArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserOAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthFindFirstOrThrowArgs} args - Arguments to find a UserOAuth
     * @example
     * // Get one UserOAuth
     * const userOAuth = await prisma.userOAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOAuthFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserOAuthFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserOAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOAuths
     * const userOAuths = await prisma.userOAuth.findMany()
     *
     * // Get first 10 UserOAuths
     * const userOAuths = await prisma.userOAuth.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userOAuthWithIdOnly = await prisma.userOAuth.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserOAuthFindManyArgs>(
      args?: SelectSubset<T, UserOAuthFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserOAuth.
     * @param {UserOAuthCreateArgs} args - Arguments to create a UserOAuth.
     * @example
     * // Create one UserOAuth
     * const UserOAuth = await prisma.userOAuth.create({
     *   data: {
     *     // ... data to create a UserOAuth
     *   }
     * })
     *
     */
    create<T extends UserOAuthCreateArgs>(
      args: SelectSubset<T, UserOAuthCreateArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserOAuths.
     * @param {UserOAuthCreateManyArgs} args - Arguments to create many UserOAuths.
     * @example
     * // Create many UserOAuths
     * const userOAuth = await prisma.userOAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserOAuthCreateManyArgs>(
      args?: SelectSubset<T, UserOAuthCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserOAuths and returns the data saved in the database.
     * @param {UserOAuthCreateManyAndReturnArgs} args - Arguments to create many UserOAuths.
     * @example
     * // Create many UserOAuths
     * const userOAuth = await prisma.userOAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserOAuths and only return the `id`
     * const userOAuthWithIdOnly = await prisma.userOAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserOAuthCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserOAuthCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserOAuth.
     * @param {UserOAuthDeleteArgs} args - Arguments to delete one UserOAuth.
     * @example
     * // Delete one UserOAuth
     * const UserOAuth = await prisma.userOAuth.delete({
     *   where: {
     *     // ... filter to delete one UserOAuth
     *   }
     * })
     *
     */
    delete<T extends UserOAuthDeleteArgs>(
      args: SelectSubset<T, UserOAuthDeleteArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserOAuth.
     * @param {UserOAuthUpdateArgs} args - Arguments to update one UserOAuth.
     * @example
     * // Update one UserOAuth
     * const userOAuth = await prisma.userOAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserOAuthUpdateArgs>(
      args: SelectSubset<T, UserOAuthUpdateArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserOAuths.
     * @param {UserOAuthDeleteManyArgs} args - Arguments to filter UserOAuths to delete.
     * @example
     * // Delete a few UserOAuths
     * const { count } = await prisma.userOAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserOAuthDeleteManyArgs>(
      args?: SelectSubset<T, UserOAuthDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserOAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOAuths
     * const userOAuth = await prisma.userOAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserOAuthUpdateManyArgs>(
      args: SelectSubset<T, UserOAuthUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserOAuths and returns the data updated in the database.
     * @param {UserOAuthUpdateManyAndReturnArgs} args - Arguments to update many UserOAuths.
     * @example
     * // Update many UserOAuths
     * const userOAuth = await prisma.userOAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserOAuths and only return the `id`
     * const userOAuthWithIdOnly = await prisma.userOAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserOAuthUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserOAuthUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserOAuth.
     * @param {UserOAuthUpsertArgs} args - Arguments to update or create a UserOAuth.
     * @example
     * // Update or create a UserOAuth
     * const userOAuth = await prisma.userOAuth.upsert({
     *   create: {
     *     // ... data to create a UserOAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOAuth we want to update
     *   }
     * })
     */
    upsert<T extends UserOAuthUpsertArgs>(
      args: SelectSubset<T, UserOAuthUpsertArgs<ExtArgs>>
    ): Prisma__UserOAuthClient<
      $Result.GetResult<
        Prisma.$UserOAuthPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserOAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthCountArgs} args - Arguments to filter UserOAuths to count.
     * @example
     * // Count the number of UserOAuths
     * const count = await prisma.userOAuth.count({
     *   where: {
     *     // ... the filter for the UserOAuths we want to count
     *   }
     * })
     **/
    count<T extends UserOAuthCountArgs>(
      args?: Subset<T, UserOAuthCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserOAuthCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserOAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserOAuthAggregateArgs>(
      args: Subset<T, UserOAuthAggregateArgs>
    ): Prisma.PrismaPromise<GetUserOAuthAggregateType<T>>;

    /**
     * Group by UserOAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserOAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOAuthGroupByArgs["orderBy"] }
        : { orderBy?: UserOAuthGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserOAuthGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetUserOAuthGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserOAuth model
     */
    readonly fields: UserOAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOAuthClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserOAuth model
   */
  interface UserOAuthFieldRefs {
    readonly id: FieldRef<"UserOAuth", "String">;
    readonly userId: FieldRef<"UserOAuth", "String">;
    readonly provider: FieldRef<"UserOAuth", "String">;
    readonly providerUserId: FieldRef<"UserOAuth", "String">;
    readonly accessTokenEnc: FieldRef<"UserOAuth", "String">;
    readonly tokenExpiresAt: FieldRef<"UserOAuth", "DateTime">;
    readonly scopes: FieldRef<"UserOAuth", "String">;
    readonly createdAt: FieldRef<"UserOAuth", "DateTime">;
    readonly updatedAt: FieldRef<"UserOAuth", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserOAuth findUnique
   */
  export type UserOAuthFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter, which UserOAuth to fetch.
     */
    where: UserOAuthWhereUniqueInput;
  };

  /**
   * UserOAuth findUniqueOrThrow
   */
  export type UserOAuthFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter, which UserOAuth to fetch.
     */
    where: UserOAuthWhereUniqueInput;
  };

  /**
   * UserOAuth findFirst
   */
  export type UserOAuthFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter, which UserOAuth to fetch.
     */
    where?: UserOAuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserOAuths to fetch.
     */
    orderBy?:
      | UserOAuthOrderByWithRelationInput
      | UserOAuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserOAuths.
     */
    cursor?: UserOAuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserOAuths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserOAuths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserOAuths.
     */
    distinct?: UserOAuthScalarFieldEnum | UserOAuthScalarFieldEnum[];
  };

  /**
   * UserOAuth findFirstOrThrow
   */
  export type UserOAuthFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter, which UserOAuth to fetch.
     */
    where?: UserOAuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserOAuths to fetch.
     */
    orderBy?:
      | UserOAuthOrderByWithRelationInput
      | UserOAuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserOAuths.
     */
    cursor?: UserOAuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserOAuths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserOAuths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserOAuths.
     */
    distinct?: UserOAuthScalarFieldEnum | UserOAuthScalarFieldEnum[];
  };

  /**
   * UserOAuth findMany
   */
  export type UserOAuthFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter, which UserOAuths to fetch.
     */
    where?: UserOAuthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserOAuths to fetch.
     */
    orderBy?:
      | UserOAuthOrderByWithRelationInput
      | UserOAuthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserOAuths.
     */
    cursor?: UserOAuthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserOAuths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserOAuths.
     */
    skip?: number;
    distinct?: UserOAuthScalarFieldEnum | UserOAuthScalarFieldEnum[];
  };

  /**
   * UserOAuth create
   */
  export type UserOAuthCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserOAuth.
     */
    data: XOR<UserOAuthCreateInput, UserOAuthUncheckedCreateInput>;
  };

  /**
   * UserOAuth createMany
   */
  export type UserOAuthCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserOAuths.
     */
    data: UserOAuthCreateManyInput | UserOAuthCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserOAuth createManyAndReturn
   */
  export type UserOAuthCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * The data used to create many UserOAuths.
     */
    data: UserOAuthCreateManyInput | UserOAuthCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserOAuth update
   */
  export type UserOAuthUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserOAuth.
     */
    data: XOR<UserOAuthUpdateInput, UserOAuthUncheckedUpdateInput>;
    /**
     * Choose, which UserOAuth to update.
     */
    where: UserOAuthWhereUniqueInput;
  };

  /**
   * UserOAuth updateMany
   */
  export type UserOAuthUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserOAuths.
     */
    data: XOR<
      UserOAuthUpdateManyMutationInput,
      UserOAuthUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserOAuths to update
     */
    where?: UserOAuthWhereInput;
    /**
     * Limit how many UserOAuths to update.
     */
    limit?: number;
  };

  /**
   * UserOAuth updateManyAndReturn
   */
  export type UserOAuthUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * The data used to update UserOAuths.
     */
    data: XOR<
      UserOAuthUpdateManyMutationInput,
      UserOAuthUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserOAuths to update
     */
    where?: UserOAuthWhereInput;
    /**
     * Limit how many UserOAuths to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserOAuth upsert
   */
  export type UserOAuthUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserOAuth to update in case it exists.
     */
    where: UserOAuthWhereUniqueInput;
    /**
     * In case the UserOAuth found by the `where` argument doesn't exist, create a new UserOAuth with this data.
     */
    create: XOR<UserOAuthCreateInput, UserOAuthUncheckedCreateInput>;
    /**
     * In case the UserOAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOAuthUpdateInput, UserOAuthUncheckedUpdateInput>;
  };

  /**
   * UserOAuth delete
   */
  export type UserOAuthDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
    /**
     * Filter which UserOAuth to delete.
     */
    where: UserOAuthWhereUniqueInput;
  };

  /**
   * UserOAuth deleteMany
   */
  export type UserOAuthDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserOAuths to delete
     */
    where?: UserOAuthWhereInput;
    /**
     * Limit how many UserOAuths to delete.
     */
    limit?: number;
  };

  /**
   * UserOAuth without action
   */
  export type UserOAuthDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserOAuth
     */
    select?: UserOAuthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserOAuth
     */
    omit?: UserOAuthOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOAuthInclude<ExtArgs> | null;
  };

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    hashedToken: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    replacedByToken: string | null;
    createdAt: Date | null;
    lastUsedAt: Date | null;
    userAgent: string | null;
    ipAddress: string | null;
    location: string | null;
    deviceName: string | null;
  };

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    hashedToken: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    replacedByToken: string | null;
    createdAt: Date | null;
    lastUsedAt: Date | null;
    userAgent: string | null;
    ipAddress: string | null;
    location: string | null;
    deviceName: string | null;
  };

  export type RefreshTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    hashedToken: number;
    expiresAt: number;
    revokedAt: number;
    replacedByToken: number;
    createdAt: number;
    lastUsedAt: number;
    userAgent: number;
    ipAddress: number;
    location: number;
    deviceName: number;
    _all: number;
  };

  export type RefreshTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    hashedToken?: true;
    expiresAt?: true;
    revokedAt?: true;
    replacedByToken?: true;
    createdAt?: true;
    lastUsedAt?: true;
    userAgent?: true;
    ipAddress?: true;
    location?: true;
    deviceName?: true;
  };

  export type RefreshTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    hashedToken?: true;
    expiresAt?: true;
    revokedAt?: true;
    replacedByToken?: true;
    createdAt?: true;
    lastUsedAt?: true;
    userAgent?: true;
    ipAddress?: true;
    location?: true;
    deviceName?: true;
  };

  export type RefreshTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    hashedToken?: true;
    expiresAt?: true;
    revokedAt?: true;
    replacedByToken?: true;
    createdAt?: true;
    lastUsedAt?: true;
    userAgent?: true;
    ipAddress?: true;
    location?: true;
    deviceName?: true;
    _all?: true;
  };

  export type RefreshTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RefreshTokens
     **/
    _count?: true | RefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type GetRefreshTokenAggregateType<
    T extends RefreshTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRefreshToken]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>;
  };

  export type RefreshTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithAggregationInput
      | RefreshTokenOrderByWithAggregationInput[];
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum;
    having?: RefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokenCountAggregateInputType | true;
    _min?: RefreshTokenMinAggregateInputType;
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type RefreshTokenGroupByOutputType = {
    id: string;
    userId: string;
    hashedToken: string;
    expiresAt: Date;
    revokedAt: Date | null;
    replacedByToken: string | null;
    createdAt: Date;
    lastUsedAt: Date;
    userAgent: string | null;
    ipAddress: string | null;
    location: string | null;
    deviceName: string | null;
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RefreshTokenGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof RefreshTokenGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type RefreshTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      hashedToken?: boolean;
      expiresAt?: boolean;
      revokedAt?: boolean;
      replacedByToken?: boolean;
      createdAt?: boolean;
      lastUsedAt?: boolean;
      userAgent?: boolean;
      ipAddress?: boolean;
      location?: boolean;
      deviceName?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      hashedToken?: boolean;
      expiresAt?: boolean;
      revokedAt?: boolean;
      replacedByToken?: boolean;
      createdAt?: boolean;
      lastUsedAt?: boolean;
      userAgent?: boolean;
      ipAddress?: boolean;
      location?: boolean;
      deviceName?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      hashedToken?: boolean;
      expiresAt?: boolean;
      revokedAt?: boolean;
      replacedByToken?: boolean;
      createdAt?: boolean;
      lastUsedAt?: boolean;
      userAgent?: boolean;
      ipAddress?: boolean;
      location?: boolean;
      deviceName?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["refreshToken"]
  >;

  export type RefreshTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    hashedToken?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    replacedByToken?: boolean;
    createdAt?: boolean;
    lastUsedAt?: boolean;
    userAgent?: boolean;
    ipAddress?: boolean;
    location?: boolean;
    deviceName?: boolean;
  };

  export type RefreshTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "hashedToken"
    | "expiresAt"
    | "revokedAt"
    | "replacedByToken"
    | "createdAt"
    | "lastUsedAt"
    | "userAgent"
    | "ipAddress"
    | "location"
    | "deviceName",
    ExtArgs["result"]["refreshToken"]
  >;
  export type RefreshTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $RefreshTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "RefreshToken";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        hashedToken: string;
        expiresAt: Date;
        revokedAt: Date | null;
        replacedByToken: string | null;
        createdAt: Date;
        lastUsedAt: Date;
        userAgent: string | null;
        ipAddress: string | null;
        location: string | null;
        deviceName: string | null;
      },
      ExtArgs["result"]["refreshToken"]
    >;
    composites: {};
  };

  type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$RefreshTokenPayload, S>;

  type RefreshTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RefreshTokenFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RefreshTokenCountAggregateInputType | true;
  };

  export interface RefreshTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["RefreshToken"];
      meta: { name: "RefreshToken" };
    };
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     *
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     *
     */
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     *
     */
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
     **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RefreshTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RefreshTokenAggregateArgs>(
      args: Subset<T, RefreshTokenAggregateArgs>
    ): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>;

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs["orderBy"] }
        : { orderBy?: RefreshTokenGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetRefreshTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RefreshToken model
     */
    readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", "String">;
    readonly userId: FieldRef<"RefreshToken", "String">;
    readonly hashedToken: FieldRef<"RefreshToken", "String">;
    readonly expiresAt: FieldRef<"RefreshToken", "DateTime">;
    readonly revokedAt: FieldRef<"RefreshToken", "DateTime">;
    readonly replacedByToken: FieldRef<"RefreshToken", "String">;
    readonly createdAt: FieldRef<"RefreshToken", "DateTime">;
    readonly lastUsedAt: FieldRef<"RefreshToken", "DateTime">;
    readonly userAgent: FieldRef<"RefreshToken", "String">;
    readonly ipAddress: FieldRef<"RefreshToken", "String">;
    readonly location: FieldRef<"RefreshToken", "String">;
    readonly deviceName: FieldRef<"RefreshToken", "String">;
  }

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
  };

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
  };

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput;
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
  };

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number;
  };

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
  };

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    githubRepo: string | null;
    createdById: string | null;
    createdAt: Date | null;
    lastActive: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    githubRepo: string | null;
    createdById: string | null;
    createdAt: Date | null;
    lastActive: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    githubRepo: number;
    createdById: number;
    createdAt: number;
    lastActive: number;
    _all: number;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    githubRepo?: true;
    createdById?: true;
    createdAt?: true;
    lastActive?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    githubRepo?: true;
    createdById?: true;
    createdAt?: true;
    lastActive?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    githubRepo?: true;
    createdById?: true;
    createdAt?: true;
    lastActive?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type ProjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput;
    orderBy?:
      | ProjectOrderByWithAggregationInput
      | ProjectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    githubRepo: string;
    createdById: string;
    createdAt: Date;
    lastActive: Date | null;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProjectGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
        }
      >
    >;

  export type ProjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      githubRepo?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      lastActive?: boolean;
      members?: boolean | Project$membersArgs<ExtArgs>;
      tasks?: boolean | Project$tasksArgs<ExtArgs>;
      chatMessages?: boolean | Project$chatMessagesArgs<ExtArgs>;
      feedbacks?: boolean | Project$feedbacksArgs<ExtArgs>;
      githubData?: boolean | Project$githubDataArgs<ExtArgs>;
      insights?: boolean | Project$insightsArgs<ExtArgs>;
      presenceLogs?: boolean | Project$presenceLogsArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      githubRepo?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      lastActive?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      githubRepo?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      lastActive?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    githubRepo?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    lastActive?: boolean;
  };

  export type ProjectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "description"
    | "githubRepo"
    | "createdById"
    | "createdAt"
    | "lastActive",
    ExtArgs["result"]["project"]
  >;
  export type ProjectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | Project$membersArgs<ExtArgs>;
    tasks?: boolean | Project$tasksArgs<ExtArgs>;
    chatMessages?: boolean | Project$chatMessagesArgs<ExtArgs>;
    feedbacks?: boolean | Project$feedbacksArgs<ExtArgs>;
    githubData?: boolean | Project$githubDataArgs<ExtArgs>;
    insights?: boolean | Project$insightsArgs<ExtArgs>;
    presenceLogs?: boolean | Project$presenceLogsArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProjectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProjectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Project";
    objects: {
      members: Prisma.$ProjectMemberPayload<ExtArgs>[];
      tasks: Prisma.$TaskPayload<ExtArgs>[];
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[];
      githubData: Prisma.$GitHubActivityPayload<ExtArgs>[];
      insights: Prisma.$InsightPayload<ExtArgs>[];
      presenceLogs: Prisma.$PresenceLogPayload<ExtArgs>[];
      createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        githubRepo: string;
        createdById: string;
        createdAt: Date;
        lastActive: Date | null;
      },
      ExtArgs["result"]["project"]
    >;
    composites: {};
  };

  type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectPayload, S>;

  type ProjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProjectFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface ProjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Project"];
      meta: { name: "Project" };
    };
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     */
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     */
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs["orderBy"] }
        : { orderBy?: ProjectGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Project model
     */
    readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    members<T extends Project$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$membersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectMemberPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$tasksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    chatMessages<T extends Project$chatMessagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$chatMessagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ChatMessagePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    feedbacks<T extends Project$feedbacksArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$feedbacksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FeedbackPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    githubData<T extends Project$githubDataArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$githubDataArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GitHubActivityPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    insights<T extends Project$insightsArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$insightsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InsightPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    presenceLogs<T extends Project$presenceLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$presenceLogsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PresenceLogPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", "String">;
    readonly name: FieldRef<"Project", "String">;
    readonly description: FieldRef<"Project", "String">;
    readonly githubRepo: FieldRef<"Project", "String">;
    readonly createdById: FieldRef<"Project", "String">;
    readonly createdAt: FieldRef<"Project", "DateTime">;
    readonly lastActive: FieldRef<"Project", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project create
   */
  export type ProjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>;
  };

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Project update
   */
  export type ProjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>;
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
  };

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput;
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>;
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>;
  };

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to delete.
     */
    limit?: number;
  };

  /**
   * Project.members
   */
  export type Project$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    where?: ProjectMemberWhereInput;
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    cursor?: ProjectMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[];
  };

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    cursor?: TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Project.chatMessages
   */
  export type Project$chatMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    where?: ChatMessageWhereInput;
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    cursor?: ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
  };

  /**
   * Project.feedbacks
   */
  export type Project$feedbacksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    where?: FeedbackWhereInput;
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    cursor?: FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Project.githubData
   */
  export type Project$githubDataArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    where?: GitHubActivityWhereInput;
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    cursor?: GitHubActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GitHubActivityScalarFieldEnum | GitHubActivityScalarFieldEnum[];
  };

  /**
   * Project.insights
   */
  export type Project$insightsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    where?: InsightWhereInput;
    orderBy?:
      | InsightOrderByWithRelationInput
      | InsightOrderByWithRelationInput[];
    cursor?: InsightWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[];
  };

  /**
   * Project.presenceLogs
   */
  export type Project$presenceLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    where?: PresenceLogWhereInput;
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    cursor?: PresenceLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PresenceLogScalarFieldEnum | PresenceLogScalarFieldEnum[];
  };

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
  };

  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null;
    _min: ProjectMemberMinAggregateOutputType | null;
    _max: ProjectMemberMaxAggregateOutputType | null;
  };

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectId: string | null;
    role: $Enums.ProjectRole | null;
    status: $Enums.MemberStatus | null;
    joinedAt: Date | null;
  };

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectId: string | null;
    role: $Enums.ProjectRole | null;
    status: $Enums.MemberStatus | null;
    joinedAt: Date | null;
  };

  export type ProjectMemberCountAggregateOutputType = {
    id: number;
    userId: number;
    projectId: number;
    role: number;
    status: number;
    joinedAt: number;
    _all: number;
  };

  export type ProjectMemberMinAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    role?: true;
    status?: true;
    joinedAt?: true;
  };

  export type ProjectMemberMaxAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    role?: true;
    status?: true;
    joinedAt?: true;
  };

  export type ProjectMemberCountAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    role?: true;
    status?: true;
    joinedAt?: true;
    _all?: true;
  };

  export type ProjectMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProjectMembers
     **/
    _count?: true | ProjectMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMemberMaxAggregateInputType;
  };

  export type GetProjectMemberAggregateType<
    T extends ProjectMemberAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProjectMember]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>;
  };

  export type ProjectMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectMemberWhereInput;
    orderBy?:
      | ProjectMemberOrderByWithAggregationInput
      | ProjectMemberOrderByWithAggregationInput[];
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum;
    having?: ProjectMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectMemberCountAggregateInputType | true;
    _min?: ProjectMemberMinAggregateInputType;
    _max?: ProjectMemberMaxAggregateInputType;
  };

  export type ProjectMemberGroupByOutputType = {
    id: string;
    userId: string;
    projectId: string;
    role: $Enums.ProjectRole;
    status: $Enums.MemberStatus;
    joinedAt: Date | null;
    _count: ProjectMemberCountAggregateOutputType | null;
    _min: ProjectMemberMinAggregateOutputType | null;
    _max: ProjectMemberMaxAggregateOutputType | null;
  };

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectMemberGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ProjectMemberGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>;
        }
      >
    >;

  export type ProjectMemberSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectId?: boolean;
      role?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectMember"]
  >;

  export type ProjectMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectId?: boolean;
      role?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectMember"]
  >;

  export type ProjectMemberSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectId?: boolean;
      role?: boolean;
      status?: boolean;
      joinedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectMember"]
  >;

  export type ProjectMemberSelectScalar = {
    id?: boolean;
    userId?: boolean;
    projectId?: boolean;
    role?: boolean;
    status?: boolean;
    joinedAt?: boolean;
  };

  export type ProjectMemberOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "projectId" | "role" | "status" | "joinedAt",
    ExtArgs["result"]["projectMember"]
  >;
  export type ProjectMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type ProjectMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type ProjectMemberIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };

  export type $ProjectMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProjectMember";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        projectId: string;
        role: $Enums.ProjectRole;
        status: $Enums.MemberStatus;
        joinedAt: Date | null;
      },
      ExtArgs["result"]["projectMember"]
    >;
    composites: {};
  };

  type ProjectMemberGetPayload<
    S extends boolean | null | undefined | ProjectMemberDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectMemberPayload, S>;

  type ProjectMemberCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProjectMemberFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProjectMemberCountAggregateInputType | true;
  };

  export interface ProjectMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProjectMember"];
      meta: { name: "ProjectMember" };
    };
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(
      args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(
      args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     *
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectMemberFindManyArgs>(
      args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     *
     */
    create<T extends ProjectMemberCreateArgs>(
      args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectMemberCreateManyArgs>(
      args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     *
     */
    delete<T extends ProjectMemberDeleteArgs>(
      args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectMemberUpdateArgs>(
      args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(
      args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(
      args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(
      args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>
    ): Prisma__ProjectMemberClient<
      $Result.GetResult<
        Prisma.$ProjectMemberPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
     **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProjectMemberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectMemberAggregateArgs>(
      args: Subset<T, ProjectMemberAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>;

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs["orderBy"] }
        : { orderBy?: ProjectMemberGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProjectMemberGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProjectMember model
     */
    readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", "String">;
    readonly userId: FieldRef<"ProjectMember", "String">;
    readonly projectId: FieldRef<"ProjectMember", "String">;
    readonly role: FieldRef<"ProjectMember", "ProjectRole">;
    readonly status: FieldRef<"ProjectMember", "MemberStatus">;
    readonly joinedAt: FieldRef<"ProjectMember", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput;
  };

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput;
  };

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[];
  };

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[];
  };

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?:
      | ProjectMemberOrderByWithRelationInput
      | ProjectMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectMembers.
     */
    skip?: number;
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[];
  };

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>;
  };

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>;
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput;
  };

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<
      ProjectMemberUpdateManyMutationInput,
      ProjectMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput;
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number;
  };

  /**
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<
      ProjectMemberUpdateManyMutationInput,
      ProjectMemberUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput;
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput;
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>;
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>;
  };

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput;
  };

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput;
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number;
  };

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null;
  };

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  export type TaskAvgAggregateOutputType = {
    weight: number | null;
    score: number | null;
  };

  export type TaskSumAggregateOutputType = {
    weight: number | null;
    score: number | null;
  };

  export type TaskMinAggregateOutputType = {
    id: string | null;
    priority: $Enums.TaskPriority | null;
    projectId: string | null;
    title: string | null;
    description: string | null;
    weight: number | null;
    status: $Enums.TaskStatus | null;
    assigneeId: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
    score: number | null;
  };

  export type TaskMaxAggregateOutputType = {
    id: string | null;
    priority: $Enums.TaskPriority | null;
    projectId: string | null;
    title: string | null;
    description: string | null;
    weight: number | null;
    status: $Enums.TaskStatus | null;
    assigneeId: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
    score: number | null;
  };

  export type TaskCountAggregateOutputType = {
    id: number;
    priority: number;
    projectId: number;
    title: number;
    description: number;
    weight: number;
    status: number;
    assigneeId: number;
    createdAt: number;
    completedAt: number;
    score: number;
    _all: number;
  };

  export type TaskAvgAggregateInputType = {
    weight?: true;
    score?: true;
  };

  export type TaskSumAggregateInputType = {
    weight?: true;
    score?: true;
  };

  export type TaskMinAggregateInputType = {
    id?: true;
    priority?: true;
    projectId?: true;
    title?: true;
    description?: true;
    weight?: true;
    status?: true;
    assigneeId?: true;
    createdAt?: true;
    completedAt?: true;
    score?: true;
  };

  export type TaskMaxAggregateInputType = {
    id?: true;
    priority?: true;
    projectId?: true;
    title?: true;
    description?: true;
    weight?: true;
    status?: true;
    assigneeId?: true;
    createdAt?: true;
    completedAt?: true;
    score?: true;
  };

  export type TaskCountAggregateInputType = {
    id?: true;
    priority?: true;
    projectId?: true;
    title?: true;
    description?: true;
    weight?: true;
    status?: true;
    assigneeId?: true;
    createdAt?: true;
    completedAt?: true;
    score?: true;
    _all?: true;
  };

  export type TaskAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tasks
     **/
    _count?: true | TaskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TaskAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TaskSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskMaxAggregateInputType;
  };

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>;
  };

  export type TaskGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
    orderBy?:
      | TaskOrderByWithAggregationInput
      | TaskOrderByWithAggregationInput[];
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
    having?: TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
  };

  export type TaskGroupByOutputType = {
    id: string;
    priority: $Enums.TaskPriority;
    projectId: string;
    title: string;
    description: string | null;
    weight: number;
    status: $Enums.TaskStatus;
    assigneeId: string | null;
    createdAt: Date;
    completedAt: Date | null;
    score: number | null;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TaskGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
          : GetScalarType<T[P], TaskGroupByOutputType[P]>;
      }
    >
  >;

  export type TaskSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      priority?: boolean;
      projectId?: boolean;
      title?: boolean;
      description?: boolean;
      weight?: boolean;
      status?: boolean;
      assigneeId?: boolean;
      createdAt?: boolean;
      completedAt?: boolean;
      score?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      assignee?: boolean | Task$assigneeArgs<ExtArgs>;
    },
    ExtArgs["result"]["task"]
  >;

  export type TaskSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      priority?: boolean;
      projectId?: boolean;
      title?: boolean;
      description?: boolean;
      weight?: boolean;
      status?: boolean;
      assigneeId?: boolean;
      createdAt?: boolean;
      completedAt?: boolean;
      score?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      assignee?: boolean | Task$assigneeArgs<ExtArgs>;
    },
    ExtArgs["result"]["task"]
  >;

  export type TaskSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      priority?: boolean;
      projectId?: boolean;
      title?: boolean;
      description?: boolean;
      weight?: boolean;
      status?: boolean;
      assigneeId?: boolean;
      createdAt?: boolean;
      completedAt?: boolean;
      score?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      assignee?: boolean | Task$assigneeArgs<ExtArgs>;
    },
    ExtArgs["result"]["task"]
  >;

  export type TaskSelectScalar = {
    id?: boolean;
    priority?: boolean;
    projectId?: boolean;
    title?: boolean;
    description?: boolean;
    weight?: boolean;
    status?: boolean;
    assigneeId?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    score?: boolean;
  };

  export type TaskOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "priority"
    | "projectId"
    | "title"
    | "description"
    | "weight"
    | "status"
    | "assigneeId"
    | "createdAt"
    | "completedAt"
    | "score",
    ExtArgs["result"]["task"]
  >;
  export type TaskInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Task$assigneeArgs<ExtArgs>;
  };
  export type TaskIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Task$assigneeArgs<ExtArgs>;
  };
  export type TaskIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Task$assigneeArgs<ExtArgs>;
  };

  export type $TaskPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Task";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      assignee: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        priority: $Enums.TaskPriority;
        projectId: string;
        title: string;
        description: string | null;
        weight: number;
        status: $Enums.TaskStatus;
        assigneeId: string | null;
        createdAt: Date;
        completedAt: Date | null;
        score: number | null;
      },
      ExtArgs["result"]["task"]
    >;
    composites: {};
  };

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> =
    $Result.GetResult<Prisma.$TaskPayload, S>;

  type TaskCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TaskFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TaskCountAggregateInputType | true;
  };

  export interface TaskDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Task"];
      meta: { name: "Task" };
    };
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     *
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaskFindManyArgs>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     *
     */
    create<T extends TaskCreateArgs>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaskCreateManyArgs>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     *
     */
    delete<T extends TaskDeleteArgs>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaskUpdateArgs>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaskDeleteManyArgs>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaskUpdateManyArgs>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
     **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TaskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TaskAggregateArgs>(
      args: Subset<T, TaskAggregateArgs>
    ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs["orderBy"] }
        : { orderBy?: TaskGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTaskGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Task model
     */
    readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(
      args?: Subset<T, Task$assigneeArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", "String">;
    readonly priority: FieldRef<"Task", "TaskPriority">;
    readonly projectId: FieldRef<"Task", "String">;
    readonly title: FieldRef<"Task", "String">;
    readonly description: FieldRef<"Task", "String">;
    readonly weight: FieldRef<"Task", "Float">;
    readonly status: FieldRef<"Task", "TaskStatus">;
    readonly assigneeId: FieldRef<"Task", "String">;
    readonly createdAt: FieldRef<"Task", "DateTime">;
    readonly completedAt: FieldRef<"Task", "DateTime">;
    readonly score: FieldRef<"Task", "Float">;
  }

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task create
   */
  export type TaskCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
  };

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Task update
   */
  export type TaskUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to update.
     */
    limit?: number;
  };

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput;
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
  };

  /**
   * Task delete
   */
  export type TaskDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number;
  };

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Task without action
   */
  export type TaskDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
  };

  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null;
    _min: ChatMessageMinAggregateOutputType | null;
    _max: ChatMessageMaxAggregateOutputType | null;
  };

  export type ChatMessageMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    senderId: string | null;
    message: string | null;
    type: string | null;
    aiLabel: string | null;
    createdAt: Date | null;
  };

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    senderId: string | null;
    message: string | null;
    type: string | null;
    aiLabel: string | null;
    createdAt: Date | null;
  };

  export type ChatMessageCountAggregateOutputType = {
    id: number;
    projectId: number;
    senderId: number;
    message: number;
    type: number;
    aiLabel: number;
    createdAt: number;
    _all: number;
  };

  export type ChatMessageMinAggregateInputType = {
    id?: true;
    projectId?: true;
    senderId?: true;
    message?: true;
    type?: true;
    aiLabel?: true;
    createdAt?: true;
  };

  export type ChatMessageMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    senderId?: true;
    message?: true;
    type?: true;
    aiLabel?: true;
    createdAt?: true;
  };

  export type ChatMessageCountAggregateInputType = {
    id?: true;
    projectId?: true;
    senderId?: true;
    message?: true;
    type?: true;
    aiLabel?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ChatMessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChatMessages
     **/
    _count?: true | ChatMessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChatMessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChatMessageMaxAggregateInputType;
  };

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> =
    {
      [P in keyof T & keyof AggregateChatMessage]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateChatMessage[P]>
        : GetScalarType<T[P], AggregateChatMessage[P]>;
    };

  export type ChatMessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ChatMessageWhereInput;
    orderBy?:
      | ChatMessageOrderByWithAggregationInput
      | ChatMessageOrderByWithAggregationInput[];
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum;
    having?: ChatMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatMessageCountAggregateInputType | true;
    _min?: ChatMessageMinAggregateInputType;
    _max?: ChatMessageMaxAggregateInputType;
  };

  export type ChatMessageGroupByOutputType = {
    id: string;
    projectId: string;
    senderId: string;
    message: string;
    type: string;
    aiLabel: string | null;
    createdAt: Date;
    _count: ChatMessageCountAggregateOutputType | null;
    _min: ChatMessageMinAggregateOutputType | null;
    _max: ChatMessageMaxAggregateOutputType | null;
  };

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ChatMessageGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ChatMessageGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>;
        }
      >
    >;

  export type ChatMessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      senderId?: boolean;
      message?: boolean;
      type?: boolean;
      aiLabel?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["chatMessage"]
  >;

  export type ChatMessageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      senderId?: boolean;
      message?: boolean;
      type?: boolean;
      aiLabel?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["chatMessage"]
  >;

  export type ChatMessageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      senderId?: boolean;
      message?: boolean;
      type?: boolean;
      aiLabel?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      sender?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["chatMessage"]
  >;

  export type ChatMessageSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    senderId?: boolean;
    message?: boolean;
    type?: boolean;
    aiLabel?: boolean;
    createdAt?: boolean;
  };

  export type ChatMessageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "senderId"
    | "message"
    | "type"
    | "aiLabel"
    | "createdAt",
    ExtArgs["result"]["chatMessage"]
  >;
  export type ChatMessageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    sender?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ChatMessageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    sender?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ChatMessageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    sender?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ChatMessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ChatMessage";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      sender: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        senderId: string;
        message: string;
        type: string;
        aiLabel: string | null;
        createdAt: Date;
      },
      ExtArgs["result"]["chatMessage"]
    >;
    composites: {};
  };

  type ChatMessageGetPayload<
    S extends boolean | null | undefined | ChatMessageDefaultArgs,
  > = $Result.GetResult<Prisma.$ChatMessagePayload, S>;

  type ChatMessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ChatMessageFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ChatMessageCountAggregateInputType | true;
  };

  export interface ChatMessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ChatMessage"];
      meta: { name: "ChatMessage" };
    };
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(
      args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(
      args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     *
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChatMessageFindManyArgs>(
      args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     *
     */
    create<T extends ChatMessageCreateArgs>(
      args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChatMessageCreateManyArgs>(
      args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     *
     */
    delete<T extends ChatMessageDeleteArgs>(
      args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChatMessageUpdateArgs>(
      args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(
      args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(
      args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(
      args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<
      $Result.GetResult<
        Prisma.$ChatMessagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
     **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ChatMessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ChatMessageAggregateArgs>(
      args: Subset<T, ChatMessageAggregateArgs>
    ): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>;

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs["orderBy"] }
        : { orderBy?: ChatMessageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetChatMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChatMessage model
     */
    readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", "String">;
    readonly projectId: FieldRef<"ChatMessage", "String">;
    readonly senderId: FieldRef<"ChatMessage", "String">;
    readonly message: FieldRef<"ChatMessage", "String">;
    readonly type: FieldRef<"ChatMessage", "String">;
    readonly aiLabel: FieldRef<"ChatMessage", "String">;
    readonly createdAt: FieldRef<"ChatMessage", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput;
  };

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput;
  };

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
  };

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatMessages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
  };

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?:
      | ChatMessageOrderByWithRelationInput
      | ChatMessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatMessages.
     */
    skip?: number;
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[];
  };

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>;
  };

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>;
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput;
  };

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<
      ChatMessageUpdateManyMutationInput,
      ChatMessageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput;
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number;
  };

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<
      ChatMessageUpdateManyMutationInput,
      ChatMessageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput;
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput;
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>;
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>;
  };

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput;
  };

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput;
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number;
  };

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null;
  };

  /**
   * Model GitHubActivity
   */

  export type AggregateGitHubActivity = {
    _count: GitHubActivityCountAggregateOutputType | null;
    _avg: GitHubActivityAvgAggregateOutputType | null;
    _sum: GitHubActivitySumAggregateOutputType | null;
    _min: GitHubActivityMinAggregateOutputType | null;
    _max: GitHubActivityMaxAggregateOutputType | null;
  };

  export type GitHubActivityAvgAggregateOutputType = {
    commitCount: number | null;
    prCount: number | null;
    linesAdded: number | null;
    linesDeleted: number | null;
  };

  export type GitHubActivitySumAggregateOutputType = {
    commitCount: number | null;
    prCount: number | null;
    linesAdded: number | null;
    linesDeleted: number | null;
  };

  export type GitHubActivityMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    commitCount: number | null;
    prCount: number | null;
    linesAdded: number | null;
    linesDeleted: number | null;
    weekStart: Date | null;
  };

  export type GitHubActivityMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    commitCount: number | null;
    prCount: number | null;
    linesAdded: number | null;
    linesDeleted: number | null;
    weekStart: Date | null;
  };

  export type GitHubActivityCountAggregateOutputType = {
    id: number;
    projectId: number;
    userId: number;
    commitCount: number;
    prCount: number;
    linesAdded: number;
    linesDeleted: number;
    weekStart: number;
    commitDetails: number;
    _all: number;
  };

  export type GitHubActivityAvgAggregateInputType = {
    commitCount?: true;
    prCount?: true;
    linesAdded?: true;
    linesDeleted?: true;
  };

  export type GitHubActivitySumAggregateInputType = {
    commitCount?: true;
    prCount?: true;
    linesAdded?: true;
    linesDeleted?: true;
  };

  export type GitHubActivityMinAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    commitCount?: true;
    prCount?: true;
    linesAdded?: true;
    linesDeleted?: true;
    weekStart?: true;
  };

  export type GitHubActivityMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    commitCount?: true;
    prCount?: true;
    linesAdded?: true;
    linesDeleted?: true;
    weekStart?: true;
  };

  export type GitHubActivityCountAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    commitCount?: true;
    prCount?: true;
    linesAdded?: true;
    linesDeleted?: true;
    weekStart?: true;
    commitDetails?: true;
    _all?: true;
  };

  export type GitHubActivityAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GitHubActivity to aggregate.
     */
    where?: GitHubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GitHubActivities to fetch.
     */
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GitHubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GitHubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GitHubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GitHubActivities
     **/
    _count?: true | GitHubActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GitHubActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GitHubActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GitHubActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GitHubActivityMaxAggregateInputType;
  };

  export type GetGitHubActivityAggregateType<
    T extends GitHubActivityAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateGitHubActivity]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitHubActivity[P]>
      : GetScalarType<T[P], AggregateGitHubActivity[P]>;
  };

  export type GitHubActivityGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GitHubActivityWhereInput;
    orderBy?:
      | GitHubActivityOrderByWithAggregationInput
      | GitHubActivityOrderByWithAggregationInput[];
    by: GitHubActivityScalarFieldEnum[] | GitHubActivityScalarFieldEnum;
    having?: GitHubActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GitHubActivityCountAggregateInputType | true;
    _avg?: GitHubActivityAvgAggregateInputType;
    _sum?: GitHubActivitySumAggregateInputType;
    _min?: GitHubActivityMinAggregateInputType;
    _max?: GitHubActivityMaxAggregateInputType;
  };

  export type GitHubActivityGroupByOutputType = {
    id: string;
    projectId: string;
    userId: string;
    commitCount: number;
    prCount: number;
    linesAdded: number;
    linesDeleted: number;
    weekStart: Date;
    commitDetails: JsonValue | null;
    _count: GitHubActivityCountAggregateOutputType | null;
    _avg: GitHubActivityAvgAggregateOutputType | null;
    _sum: GitHubActivitySumAggregateOutputType | null;
    _min: GitHubActivityMinAggregateOutputType | null;
    _max: GitHubActivityMaxAggregateOutputType | null;
  };

  type GetGitHubActivityGroupByPayload<T extends GitHubActivityGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GitHubActivityGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof GitHubActivityGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitHubActivityGroupByOutputType[P]>
            : GetScalarType<T[P], GitHubActivityGroupByOutputType[P]>;
        }
      >
    >;

  export type GitHubActivitySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      commitCount?: boolean;
      prCount?: boolean;
      linesAdded?: boolean;
      linesDeleted?: boolean;
      weekStart?: boolean;
      commitDetails?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["gitHubActivity"]
  >;

  export type GitHubActivitySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      commitCount?: boolean;
      prCount?: boolean;
      linesAdded?: boolean;
      linesDeleted?: boolean;
      weekStart?: boolean;
      commitDetails?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["gitHubActivity"]
  >;

  export type GitHubActivitySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      commitCount?: boolean;
      prCount?: boolean;
      linesAdded?: boolean;
      linesDeleted?: boolean;
      weekStart?: boolean;
      commitDetails?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["gitHubActivity"]
  >;

  export type GitHubActivitySelectScalar = {
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    commitCount?: boolean;
    prCount?: boolean;
    linesAdded?: boolean;
    linesDeleted?: boolean;
    weekStart?: boolean;
    commitDetails?: boolean;
  };

  export type GitHubActivityOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "userId"
    | "commitCount"
    | "prCount"
    | "linesAdded"
    | "linesDeleted"
    | "weekStart"
    | "commitDetails",
    ExtArgs["result"]["gitHubActivity"]
  >;
  export type GitHubActivityInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GitHubActivityIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GitHubActivityIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $GitHubActivityPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "GitHubActivity";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        userId: string;
        commitCount: number;
        prCount: number;
        linesAdded: number;
        linesDeleted: number;
        weekStart: Date;
        commitDetails: Prisma.JsonValue | null;
      },
      ExtArgs["result"]["gitHubActivity"]
    >;
    composites: {};
  };

  type GitHubActivityGetPayload<
    S extends boolean | null | undefined | GitHubActivityDefaultArgs,
  > = $Result.GetResult<Prisma.$GitHubActivityPayload, S>;

  type GitHubActivityCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    GitHubActivityFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: GitHubActivityCountAggregateInputType | true;
  };

  export interface GitHubActivityDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["GitHubActivity"];
      meta: { name: "GitHubActivity" };
    };
    /**
     * Find zero or one GitHubActivity that matches the filter.
     * @param {GitHubActivityFindUniqueArgs} args - Arguments to find a GitHubActivity
     * @example
     * // Get one GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitHubActivityFindUniqueArgs>(
      args: SelectSubset<T, GitHubActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one GitHubActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitHubActivityFindUniqueOrThrowArgs} args - Arguments to find a GitHubActivity
     * @example
     * // Get one GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitHubActivityFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GitHubActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GitHubActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityFindFirstArgs} args - Arguments to find a GitHubActivity
     * @example
     * // Get one GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitHubActivityFindFirstArgs>(
      args?: SelectSubset<T, GitHubActivityFindFirstArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GitHubActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityFindFirstOrThrowArgs} args - Arguments to find a GitHubActivity
     * @example
     * // Get one GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitHubActivityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GitHubActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more GitHubActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitHubActivities
     * const gitHubActivities = await prisma.gitHubActivity.findMany()
     *
     * // Get first 10 GitHubActivities
     * const gitHubActivities = await prisma.gitHubActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gitHubActivityWithIdOnly = await prisma.gitHubActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GitHubActivityFindManyArgs>(
      args?: SelectSubset<T, GitHubActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a GitHubActivity.
     * @param {GitHubActivityCreateArgs} args - Arguments to create a GitHubActivity.
     * @example
     * // Create one GitHubActivity
     * const GitHubActivity = await prisma.gitHubActivity.create({
     *   data: {
     *     // ... data to create a GitHubActivity
     *   }
     * })
     *
     */
    create<T extends GitHubActivityCreateArgs>(
      args: SelectSubset<T, GitHubActivityCreateArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many GitHubActivities.
     * @param {GitHubActivityCreateManyArgs} args - Arguments to create many GitHubActivities.
     * @example
     * // Create many GitHubActivities
     * const gitHubActivity = await prisma.gitHubActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GitHubActivityCreateManyArgs>(
      args?: SelectSubset<T, GitHubActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many GitHubActivities and returns the data saved in the database.
     * @param {GitHubActivityCreateManyAndReturnArgs} args - Arguments to create many GitHubActivities.
     * @example
     * // Create many GitHubActivities
     * const gitHubActivity = await prisma.gitHubActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GitHubActivities and only return the `id`
     * const gitHubActivityWithIdOnly = await prisma.gitHubActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GitHubActivityCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GitHubActivityCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a GitHubActivity.
     * @param {GitHubActivityDeleteArgs} args - Arguments to delete one GitHubActivity.
     * @example
     * // Delete one GitHubActivity
     * const GitHubActivity = await prisma.gitHubActivity.delete({
     *   where: {
     *     // ... filter to delete one GitHubActivity
     *   }
     * })
     *
     */
    delete<T extends GitHubActivityDeleteArgs>(
      args: SelectSubset<T, GitHubActivityDeleteArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one GitHubActivity.
     * @param {GitHubActivityUpdateArgs} args - Arguments to update one GitHubActivity.
     * @example
     * // Update one GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GitHubActivityUpdateArgs>(
      args: SelectSubset<T, GitHubActivityUpdateArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more GitHubActivities.
     * @param {GitHubActivityDeleteManyArgs} args - Arguments to filter GitHubActivities to delete.
     * @example
     * // Delete a few GitHubActivities
     * const { count } = await prisma.gitHubActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GitHubActivityDeleteManyArgs>(
      args?: SelectSubset<T, GitHubActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GitHubActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitHubActivities
     * const gitHubActivity = await prisma.gitHubActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GitHubActivityUpdateManyArgs>(
      args: SelectSubset<T, GitHubActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GitHubActivities and returns the data updated in the database.
     * @param {GitHubActivityUpdateManyAndReturnArgs} args - Arguments to update many GitHubActivities.
     * @example
     * // Update many GitHubActivities
     * const gitHubActivity = await prisma.gitHubActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GitHubActivities and only return the `id`
     * const gitHubActivityWithIdOnly = await prisma.gitHubActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GitHubActivityUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GitHubActivityUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one GitHubActivity.
     * @param {GitHubActivityUpsertArgs} args - Arguments to update or create a GitHubActivity.
     * @example
     * // Update or create a GitHubActivity
     * const gitHubActivity = await prisma.gitHubActivity.upsert({
     *   create: {
     *     // ... data to create a GitHubActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitHubActivity we want to update
     *   }
     * })
     */
    upsert<T extends GitHubActivityUpsertArgs>(
      args: SelectSubset<T, GitHubActivityUpsertArgs<ExtArgs>>
    ): Prisma__GitHubActivityClient<
      $Result.GetResult<
        Prisma.$GitHubActivityPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of GitHubActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityCountArgs} args - Arguments to filter GitHubActivities to count.
     * @example
     * // Count the number of GitHubActivities
     * const count = await prisma.gitHubActivity.count({
     *   where: {
     *     // ... the filter for the GitHubActivities we want to count
     *   }
     * })
     **/
    count<T extends GitHubActivityCountArgs>(
      args?: Subset<T, GitHubActivityCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GitHubActivityCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a GitHubActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GitHubActivityAggregateArgs>(
      args: Subset<T, GitHubActivityAggregateArgs>
    ): Prisma.PrismaPromise<GetGitHubActivityAggregateType<T>>;

    /**
     * Group by GitHubActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GitHubActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitHubActivityGroupByArgs["orderBy"] }
        : { orderBy?: GitHubActivityGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GitHubActivityGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetGitHubActivityGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GitHubActivity model
     */
    readonly fields: GitHubActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitHubActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitHubActivityClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the GitHubActivity model
   */
  interface GitHubActivityFieldRefs {
    readonly id: FieldRef<"GitHubActivity", "String">;
    readonly projectId: FieldRef<"GitHubActivity", "String">;
    readonly userId: FieldRef<"GitHubActivity", "String">;
    readonly commitCount: FieldRef<"GitHubActivity", "Int">;
    readonly prCount: FieldRef<"GitHubActivity", "Int">;
    readonly linesAdded: FieldRef<"GitHubActivity", "Int">;
    readonly linesDeleted: FieldRef<"GitHubActivity", "Int">;
    readonly weekStart: FieldRef<"GitHubActivity", "DateTime">;
    readonly commitDetails: FieldRef<"GitHubActivity", "Json">;
  }

  // Custom InputTypes
  /**
   * GitHubActivity findUnique
   */
  export type GitHubActivityFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which GitHubActivity to fetch.
     */
    where: GitHubActivityWhereUniqueInput;
  };

  /**
   * GitHubActivity findUniqueOrThrow
   */
  export type GitHubActivityFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which GitHubActivity to fetch.
     */
    where: GitHubActivityWhereUniqueInput;
  };

  /**
   * GitHubActivity findFirst
   */
  export type GitHubActivityFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which GitHubActivity to fetch.
     */
    where?: GitHubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GitHubActivities to fetch.
     */
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GitHubActivities.
     */
    cursor?: GitHubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GitHubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GitHubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GitHubActivities.
     */
    distinct?: GitHubActivityScalarFieldEnum | GitHubActivityScalarFieldEnum[];
  };

  /**
   * GitHubActivity findFirstOrThrow
   */
  export type GitHubActivityFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which GitHubActivity to fetch.
     */
    where?: GitHubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GitHubActivities to fetch.
     */
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GitHubActivities.
     */
    cursor?: GitHubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GitHubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GitHubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GitHubActivities.
     */
    distinct?: GitHubActivityScalarFieldEnum | GitHubActivityScalarFieldEnum[];
  };

  /**
   * GitHubActivity findMany
   */
  export type GitHubActivityFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which GitHubActivities to fetch.
     */
    where?: GitHubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GitHubActivities to fetch.
     */
    orderBy?:
      | GitHubActivityOrderByWithRelationInput
      | GitHubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GitHubActivities.
     */
    cursor?: GitHubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GitHubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GitHubActivities.
     */
    skip?: number;
    distinct?: GitHubActivityScalarFieldEnum | GitHubActivityScalarFieldEnum[];
  };

  /**
   * GitHubActivity create
   */
  export type GitHubActivityCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * The data needed to create a GitHubActivity.
     */
    data: XOR<GitHubActivityCreateInput, GitHubActivityUncheckedCreateInput>;
  };

  /**
   * GitHubActivity createMany
   */
  export type GitHubActivityCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many GitHubActivities.
     */
    data: GitHubActivityCreateManyInput | GitHubActivityCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GitHubActivity createManyAndReturn
   */
  export type GitHubActivityCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many GitHubActivities.
     */
    data: GitHubActivityCreateManyInput | GitHubActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GitHubActivity update
   */
  export type GitHubActivityUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * The data needed to update a GitHubActivity.
     */
    data: XOR<GitHubActivityUpdateInput, GitHubActivityUncheckedUpdateInput>;
    /**
     * Choose, which GitHubActivity to update.
     */
    where: GitHubActivityWhereUniqueInput;
  };

  /**
   * GitHubActivity updateMany
   */
  export type GitHubActivityUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update GitHubActivities.
     */
    data: XOR<
      GitHubActivityUpdateManyMutationInput,
      GitHubActivityUncheckedUpdateManyInput
    >;
    /**
     * Filter which GitHubActivities to update
     */
    where?: GitHubActivityWhereInput;
    /**
     * Limit how many GitHubActivities to update.
     */
    limit?: number;
  };

  /**
   * GitHubActivity updateManyAndReturn
   */
  export type GitHubActivityUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * The data used to update GitHubActivities.
     */
    data: XOR<
      GitHubActivityUpdateManyMutationInput,
      GitHubActivityUncheckedUpdateManyInput
    >;
    /**
     * Filter which GitHubActivities to update
     */
    where?: GitHubActivityWhereInput;
    /**
     * Limit how many GitHubActivities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GitHubActivity upsert
   */
  export type GitHubActivityUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * The filter to search for the GitHubActivity to update in case it exists.
     */
    where: GitHubActivityWhereUniqueInput;
    /**
     * In case the GitHubActivity found by the `where` argument doesn't exist, create a new GitHubActivity with this data.
     */
    create: XOR<GitHubActivityCreateInput, GitHubActivityUncheckedCreateInput>;
    /**
     * In case the GitHubActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitHubActivityUpdateInput, GitHubActivityUncheckedUpdateInput>;
  };

  /**
   * GitHubActivity delete
   */
  export type GitHubActivityDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
    /**
     * Filter which GitHubActivity to delete.
     */
    where: GitHubActivityWhereUniqueInput;
  };

  /**
   * GitHubActivity deleteMany
   */
  export type GitHubActivityDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GitHubActivities to delete
     */
    where?: GitHubActivityWhereInput;
    /**
     * Limit how many GitHubActivities to delete.
     */
    limit?: number;
  };

  /**
   * GitHubActivity without action
   */
  export type GitHubActivityDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GitHubActivity
     */
    select?: GitHubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GitHubActivity
     */
    omit?: GitHubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubActivityInclude<ExtArgs> | null;
  };

  /**
   * Model GoogleDocsData
   */

  export type AggregateGoogleDocsData = {
    _count: GoogleDocsDataCountAggregateOutputType | null;
    _avg: GoogleDocsDataAvgAggregateOutputType | null;
    _sum: GoogleDocsDataSumAggregateOutputType | null;
    _min: GoogleDocsDataMinAggregateOutputType | null;
    _max: GoogleDocsDataMaxAggregateOutputType | null;
  };

  export type GoogleDocsDataAvgAggregateOutputType = {
    editsCount: number | null;
  };

  export type GoogleDocsDataSumAggregateOutputType = {
    editsCount: number | null;
  };

  export type GoogleDocsDataMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    editsCount: number | null;
    lastActivity: Date | null;
  };

  export type GoogleDocsDataMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    editsCount: number | null;
    lastActivity: Date | null;
  };

  export type GoogleDocsDataCountAggregateOutputType = {
    id: number;
    userId: number;
    editsCount: number;
    lastActivity: number;
    _all: number;
  };

  export type GoogleDocsDataAvgAggregateInputType = {
    editsCount?: true;
  };

  export type GoogleDocsDataSumAggregateInputType = {
    editsCount?: true;
  };

  export type GoogleDocsDataMinAggregateInputType = {
    id?: true;
    userId?: true;
    editsCount?: true;
    lastActivity?: true;
  };

  export type GoogleDocsDataMaxAggregateInputType = {
    id?: true;
    userId?: true;
    editsCount?: true;
    lastActivity?: true;
  };

  export type GoogleDocsDataCountAggregateInputType = {
    id?: true;
    userId?: true;
    editsCount?: true;
    lastActivity?: true;
    _all?: true;
  };

  export type GoogleDocsDataAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GoogleDocsData to aggregate.
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GoogleDocsData to fetch.
     */
    orderBy?:
      | GoogleDocsDataOrderByWithRelationInput
      | GoogleDocsDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GoogleDocsDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GoogleDocsData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GoogleDocsData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GoogleDocsData
     **/
    _count?: true | GoogleDocsDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GoogleDocsDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GoogleDocsDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoogleDocsDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoogleDocsDataMaxAggregateInputType;
  };

  export type GetGoogleDocsDataAggregateType<
    T extends GoogleDocsDataAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateGoogleDocsData]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleDocsData[P]>
      : GetScalarType<T[P], AggregateGoogleDocsData[P]>;
  };

  export type GoogleDocsDataGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GoogleDocsDataWhereInput;
    orderBy?:
      | GoogleDocsDataOrderByWithAggregationInput
      | GoogleDocsDataOrderByWithAggregationInput[];
    by: GoogleDocsDataScalarFieldEnum[] | GoogleDocsDataScalarFieldEnum;
    having?: GoogleDocsDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoogleDocsDataCountAggregateInputType | true;
    _avg?: GoogleDocsDataAvgAggregateInputType;
    _sum?: GoogleDocsDataSumAggregateInputType;
    _min?: GoogleDocsDataMinAggregateInputType;
    _max?: GoogleDocsDataMaxAggregateInputType;
  };

  export type GoogleDocsDataGroupByOutputType = {
    id: string;
    userId: string;
    editsCount: number | null;
    lastActivity: Date | null;
    _count: GoogleDocsDataCountAggregateOutputType | null;
    _avg: GoogleDocsDataAvgAggregateOutputType | null;
    _sum: GoogleDocsDataSumAggregateOutputType | null;
    _min: GoogleDocsDataMinAggregateOutputType | null;
    _max: GoogleDocsDataMaxAggregateOutputType | null;
  };

  type GetGoogleDocsDataGroupByPayload<T extends GoogleDocsDataGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GoogleDocsDataGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof GoogleDocsDataGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleDocsDataGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleDocsDataGroupByOutputType[P]>;
        }
      >
    >;

  export type GoogleDocsDataSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      editsCount?: boolean;
      lastActivity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["googleDocsData"]
  >;

  export type GoogleDocsDataSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      editsCount?: boolean;
      lastActivity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["googleDocsData"]
  >;

  export type GoogleDocsDataSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      editsCount?: boolean;
      lastActivity?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["googleDocsData"]
  >;

  export type GoogleDocsDataSelectScalar = {
    id?: boolean;
    userId?: boolean;
    editsCount?: boolean;
    lastActivity?: boolean;
  };

  export type GoogleDocsDataOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "editsCount" | "lastActivity",
    ExtArgs["result"]["googleDocsData"]
  >;
  export type GoogleDocsDataInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GoogleDocsDataIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GoogleDocsDataIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $GoogleDocsDataPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "GoogleDocsData";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        editsCount: number | null;
        lastActivity: Date | null;
      },
      ExtArgs["result"]["googleDocsData"]
    >;
    composites: {};
  };

  type GoogleDocsDataGetPayload<
    S extends boolean | null | undefined | GoogleDocsDataDefaultArgs,
  > = $Result.GetResult<Prisma.$GoogleDocsDataPayload, S>;

  type GoogleDocsDataCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    GoogleDocsDataFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: GoogleDocsDataCountAggregateInputType | true;
  };

  export interface GoogleDocsDataDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["GoogleDocsData"];
      meta: { name: "GoogleDocsData" };
    };
    /**
     * Find zero or one GoogleDocsData that matches the filter.
     * @param {GoogleDocsDataFindUniqueArgs} args - Arguments to find a GoogleDocsData
     * @example
     * // Get one GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleDocsDataFindUniqueArgs>(
      args: SelectSubset<T, GoogleDocsDataFindUniqueArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one GoogleDocsData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleDocsDataFindUniqueOrThrowArgs} args - Arguments to find a GoogleDocsData
     * @example
     * // Get one GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleDocsDataFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GoogleDocsDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GoogleDocsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataFindFirstArgs} args - Arguments to find a GoogleDocsData
     * @example
     * // Get one GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleDocsDataFindFirstArgs>(
      args?: SelectSubset<T, GoogleDocsDataFindFirstArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GoogleDocsData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataFindFirstOrThrowArgs} args - Arguments to find a GoogleDocsData
     * @example
     * // Get one GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleDocsDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GoogleDocsDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more GoogleDocsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findMany()
     *
     * // Get first 10 GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const googleDocsDataWithIdOnly = await prisma.googleDocsData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GoogleDocsDataFindManyArgs>(
      args?: SelectSubset<T, GoogleDocsDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a GoogleDocsData.
     * @param {GoogleDocsDataCreateArgs} args - Arguments to create a GoogleDocsData.
     * @example
     * // Create one GoogleDocsData
     * const GoogleDocsData = await prisma.googleDocsData.create({
     *   data: {
     *     // ... data to create a GoogleDocsData
     *   }
     * })
     *
     */
    create<T extends GoogleDocsDataCreateArgs>(
      args: SelectSubset<T, GoogleDocsDataCreateArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many GoogleDocsData.
     * @param {GoogleDocsDataCreateManyArgs} args - Arguments to create many GoogleDocsData.
     * @example
     * // Create many GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GoogleDocsDataCreateManyArgs>(
      args?: SelectSubset<T, GoogleDocsDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many GoogleDocsData and returns the data saved in the database.
     * @param {GoogleDocsDataCreateManyAndReturnArgs} args - Arguments to create many GoogleDocsData.
     * @example
     * // Create many GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GoogleDocsData and only return the `id`
     * const googleDocsDataWithIdOnly = await prisma.googleDocsData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GoogleDocsDataCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GoogleDocsDataCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a GoogleDocsData.
     * @param {GoogleDocsDataDeleteArgs} args - Arguments to delete one GoogleDocsData.
     * @example
     * // Delete one GoogleDocsData
     * const GoogleDocsData = await prisma.googleDocsData.delete({
     *   where: {
     *     // ... filter to delete one GoogleDocsData
     *   }
     * })
     *
     */
    delete<T extends GoogleDocsDataDeleteArgs>(
      args: SelectSubset<T, GoogleDocsDataDeleteArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one GoogleDocsData.
     * @param {GoogleDocsDataUpdateArgs} args - Arguments to update one GoogleDocsData.
     * @example
     * // Update one GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GoogleDocsDataUpdateArgs>(
      args: SelectSubset<T, GoogleDocsDataUpdateArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more GoogleDocsData.
     * @param {GoogleDocsDataDeleteManyArgs} args - Arguments to filter GoogleDocsData to delete.
     * @example
     * // Delete a few GoogleDocsData
     * const { count } = await prisma.googleDocsData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GoogleDocsDataDeleteManyArgs>(
      args?: SelectSubset<T, GoogleDocsDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GoogleDocsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GoogleDocsDataUpdateManyArgs>(
      args: SelectSubset<T, GoogleDocsDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GoogleDocsData and returns the data updated in the database.
     * @param {GoogleDocsDataUpdateManyAndReturnArgs} args - Arguments to update many GoogleDocsData.
     * @example
     * // Update many GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GoogleDocsData and only return the `id`
     * const googleDocsDataWithIdOnly = await prisma.googleDocsData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GoogleDocsDataUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GoogleDocsDataUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one GoogleDocsData.
     * @param {GoogleDocsDataUpsertArgs} args - Arguments to update or create a GoogleDocsData.
     * @example
     * // Update or create a GoogleDocsData
     * const googleDocsData = await prisma.googleDocsData.upsert({
     *   create: {
     *     // ... data to create a GoogleDocsData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleDocsData we want to update
     *   }
     * })
     */
    upsert<T extends GoogleDocsDataUpsertArgs>(
      args: SelectSubset<T, GoogleDocsDataUpsertArgs<ExtArgs>>
    ): Prisma__GoogleDocsDataClient<
      $Result.GetResult<
        Prisma.$GoogleDocsDataPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of GoogleDocsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataCountArgs} args - Arguments to filter GoogleDocsData to count.
     * @example
     * // Count the number of GoogleDocsData
     * const count = await prisma.googleDocsData.count({
     *   where: {
     *     // ... the filter for the GoogleDocsData we want to count
     *   }
     * })
     **/
    count<T extends GoogleDocsDataCountArgs>(
      args?: Subset<T, GoogleDocsDataCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GoogleDocsDataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a GoogleDocsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GoogleDocsDataAggregateArgs>(
      args: Subset<T, GoogleDocsDataAggregateArgs>
    ): Prisma.PrismaPromise<GetGoogleDocsDataAggregateType<T>>;

    /**
     * Group by GoogleDocsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleDocsDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GoogleDocsDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleDocsDataGroupByArgs["orderBy"] }
        : { orderBy?: GoogleDocsDataGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GoogleDocsDataGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetGoogleDocsDataGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GoogleDocsData model
     */
    readonly fields: GoogleDocsDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleDocsData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleDocsDataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the GoogleDocsData model
   */
  interface GoogleDocsDataFieldRefs {
    readonly id: FieldRef<"GoogleDocsData", "String">;
    readonly userId: FieldRef<"GoogleDocsData", "String">;
    readonly editsCount: FieldRef<"GoogleDocsData", "Int">;
    readonly lastActivity: FieldRef<"GoogleDocsData", "DateTime">;
  }

  // Custom InputTypes
  /**
   * GoogleDocsData findUnique
   */
  export type GoogleDocsDataFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter, which GoogleDocsData to fetch.
     */
    where: GoogleDocsDataWhereUniqueInput;
  };

  /**
   * GoogleDocsData findUniqueOrThrow
   */
  export type GoogleDocsDataFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter, which GoogleDocsData to fetch.
     */
    where: GoogleDocsDataWhereUniqueInput;
  };

  /**
   * GoogleDocsData findFirst
   */
  export type GoogleDocsDataFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter, which GoogleDocsData to fetch.
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GoogleDocsData to fetch.
     */
    orderBy?:
      | GoogleDocsDataOrderByWithRelationInput
      | GoogleDocsDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GoogleDocsData.
     */
    cursor?: GoogleDocsDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GoogleDocsData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GoogleDocsData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GoogleDocsData.
     */
    distinct?: GoogleDocsDataScalarFieldEnum | GoogleDocsDataScalarFieldEnum[];
  };

  /**
   * GoogleDocsData findFirstOrThrow
   */
  export type GoogleDocsDataFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter, which GoogleDocsData to fetch.
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GoogleDocsData to fetch.
     */
    orderBy?:
      | GoogleDocsDataOrderByWithRelationInput
      | GoogleDocsDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GoogleDocsData.
     */
    cursor?: GoogleDocsDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GoogleDocsData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GoogleDocsData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GoogleDocsData.
     */
    distinct?: GoogleDocsDataScalarFieldEnum | GoogleDocsDataScalarFieldEnum[];
  };

  /**
   * GoogleDocsData findMany
   */
  export type GoogleDocsDataFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter, which GoogleDocsData to fetch.
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GoogleDocsData to fetch.
     */
    orderBy?:
      | GoogleDocsDataOrderByWithRelationInput
      | GoogleDocsDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GoogleDocsData.
     */
    cursor?: GoogleDocsDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GoogleDocsData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GoogleDocsData.
     */
    skip?: number;
    distinct?: GoogleDocsDataScalarFieldEnum | GoogleDocsDataScalarFieldEnum[];
  };

  /**
   * GoogleDocsData create
   */
  export type GoogleDocsDataCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * The data needed to create a GoogleDocsData.
     */
    data: XOR<GoogleDocsDataCreateInput, GoogleDocsDataUncheckedCreateInput>;
  };

  /**
   * GoogleDocsData createMany
   */
  export type GoogleDocsDataCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many GoogleDocsData.
     */
    data: GoogleDocsDataCreateManyInput | GoogleDocsDataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GoogleDocsData createManyAndReturn
   */
  export type GoogleDocsDataCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * The data used to create many GoogleDocsData.
     */
    data: GoogleDocsDataCreateManyInput | GoogleDocsDataCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GoogleDocsData update
   */
  export type GoogleDocsDataUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * The data needed to update a GoogleDocsData.
     */
    data: XOR<GoogleDocsDataUpdateInput, GoogleDocsDataUncheckedUpdateInput>;
    /**
     * Choose, which GoogleDocsData to update.
     */
    where: GoogleDocsDataWhereUniqueInput;
  };

  /**
   * GoogleDocsData updateMany
   */
  export type GoogleDocsDataUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update GoogleDocsData.
     */
    data: XOR<
      GoogleDocsDataUpdateManyMutationInput,
      GoogleDocsDataUncheckedUpdateManyInput
    >;
    /**
     * Filter which GoogleDocsData to update
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * Limit how many GoogleDocsData to update.
     */
    limit?: number;
  };

  /**
   * GoogleDocsData updateManyAndReturn
   */
  export type GoogleDocsDataUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * The data used to update GoogleDocsData.
     */
    data: XOR<
      GoogleDocsDataUpdateManyMutationInput,
      GoogleDocsDataUncheckedUpdateManyInput
    >;
    /**
     * Filter which GoogleDocsData to update
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * Limit how many GoogleDocsData to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GoogleDocsData upsert
   */
  export type GoogleDocsDataUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * The filter to search for the GoogleDocsData to update in case it exists.
     */
    where: GoogleDocsDataWhereUniqueInput;
    /**
     * In case the GoogleDocsData found by the `where` argument doesn't exist, create a new GoogleDocsData with this data.
     */
    create: XOR<GoogleDocsDataCreateInput, GoogleDocsDataUncheckedCreateInput>;
    /**
     * In case the GoogleDocsData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleDocsDataUpdateInput, GoogleDocsDataUncheckedUpdateInput>;
  };

  /**
   * GoogleDocsData delete
   */
  export type GoogleDocsDataDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
    /**
     * Filter which GoogleDocsData to delete.
     */
    where: GoogleDocsDataWhereUniqueInput;
  };

  /**
   * GoogleDocsData deleteMany
   */
  export type GoogleDocsDataDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GoogleDocsData to delete
     */
    where?: GoogleDocsDataWhereInput;
    /**
     * Limit how many GoogleDocsData to delete.
     */
    limit?: number;
  };

  /**
   * GoogleDocsData without action
   */
  export type GoogleDocsDataDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GoogleDocsData
     */
    select?: GoogleDocsDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GoogleDocsData
     */
    omit?: GoogleDocsDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleDocsDataInclude<ExtArgs> | null;
  };

  /**
   * Model Insight
   */

  export type AggregateInsight = {
    _count: InsightCountAggregateOutputType | null;
    _min: InsightMinAggregateOutputType | null;
    _max: InsightMaxAggregateOutputType | null;
  };

  export type InsightMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    generatedAt: Date | null;
    type: string | null;
    summary: string | null;
  };

  export type InsightMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    generatedAt: Date | null;
    type: string | null;
    summary: string | null;
  };

  export type InsightCountAggregateOutputType = {
    id: number;
    projectId: number;
    generatedAt: number;
    type: number;
    summary: number;
    metrics: number;
    _all: number;
  };

  export type InsightMinAggregateInputType = {
    id?: true;
    projectId?: true;
    generatedAt?: true;
    type?: true;
    summary?: true;
  };

  export type InsightMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    generatedAt?: true;
    type?: true;
    summary?: true;
  };

  export type InsightCountAggregateInputType = {
    id?: true;
    projectId?: true;
    generatedAt?: true;
    type?: true;
    summary?: true;
    metrics?: true;
    _all?: true;
  };

  export type InsightAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Insight to aggregate.
     */
    where?: InsightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insights to fetch.
     */
    orderBy?:
      | InsightOrderByWithRelationInput
      | InsightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InsightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Insights
     **/
    _count?: true | InsightCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InsightMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InsightMaxAggregateInputType;
  };

  export type GetInsightAggregateType<T extends InsightAggregateArgs> = {
    [P in keyof T & keyof AggregateInsight]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsight[P]>
      : GetScalarType<T[P], AggregateInsight[P]>;
  };

  export type InsightGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InsightWhereInput;
    orderBy?:
      | InsightOrderByWithAggregationInput
      | InsightOrderByWithAggregationInput[];
    by: InsightScalarFieldEnum[] | InsightScalarFieldEnum;
    having?: InsightScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InsightCountAggregateInputType | true;
    _min?: InsightMinAggregateInputType;
    _max?: InsightMaxAggregateInputType;
  };

  export type InsightGroupByOutputType = {
    id: string;
    projectId: string;
    generatedAt: Date;
    type: string;
    summary: string;
    metrics: JsonValue | null;
    _count: InsightCountAggregateOutputType | null;
    _min: InsightMinAggregateOutputType | null;
    _max: InsightMaxAggregateOutputType | null;
  };

  type GetInsightGroupByPayload<T extends InsightGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InsightGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof InsightGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsightGroupByOutputType[P]>
            : GetScalarType<T[P], InsightGroupByOutputType[P]>;
        }
      >
    >;

  export type InsightSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      generatedAt?: boolean;
      type?: boolean;
      summary?: boolean;
      metrics?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["insight"]
  >;

  export type InsightSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      generatedAt?: boolean;
      type?: boolean;
      summary?: boolean;
      metrics?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["insight"]
  >;

  export type InsightSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      generatedAt?: boolean;
      type?: boolean;
      summary?: boolean;
      metrics?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["insight"]
  >;

  export type InsightSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    generatedAt?: boolean;
    type?: boolean;
    summary?: boolean;
    metrics?: boolean;
  };

  export type InsightOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "projectId" | "generatedAt" | "type" | "summary" | "metrics",
    ExtArgs["result"]["insight"]
  >;
  export type InsightInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type InsightIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type InsightIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };

  export type $InsightPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Insight";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        generatedAt: Date;
        type: string;
        summary: string;
        metrics: Prisma.JsonValue | null;
      },
      ExtArgs["result"]["insight"]
    >;
    composites: {};
  };

  type InsightGetPayload<
    S extends boolean | null | undefined | InsightDefaultArgs,
  > = $Result.GetResult<Prisma.$InsightPayload, S>;

  type InsightCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<InsightFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: InsightCountAggregateInputType | true;
  };

  export interface InsightDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Insight"];
      meta: { name: "Insight" };
    };
    /**
     * Find zero or one Insight that matches the filter.
     * @param {InsightFindUniqueArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsightFindUniqueArgs>(
      args: SelectSubset<T, InsightFindUniqueArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Insight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsightFindUniqueOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsightFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InsightFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Insight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsightFindFirstArgs>(
      args?: SelectSubset<T, InsightFindFirstArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Insight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsightFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InsightFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Insights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insights
     * const insights = await prisma.insight.findMany()
     *
     * // Get first 10 Insights
     * const insights = await prisma.insight.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insightWithIdOnly = await prisma.insight.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InsightFindManyArgs>(
      args?: SelectSubset<T, InsightFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Insight.
     * @param {InsightCreateArgs} args - Arguments to create a Insight.
     * @example
     * // Create one Insight
     * const Insight = await prisma.insight.create({
     *   data: {
     *     // ... data to create a Insight
     *   }
     * })
     *
     */
    create<T extends InsightCreateArgs>(
      args: SelectSubset<T, InsightCreateArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Insights.
     * @param {InsightCreateManyArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InsightCreateManyArgs>(
      args?: SelectSubset<T, InsightCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Insights and returns the data saved in the database.
     * @param {InsightCreateManyAndReturnArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InsightCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InsightCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Insight.
     * @param {InsightDeleteArgs} args - Arguments to delete one Insight.
     * @example
     * // Delete one Insight
     * const Insight = await prisma.insight.delete({
     *   where: {
     *     // ... filter to delete one Insight
     *   }
     * })
     *
     */
    delete<T extends InsightDeleteArgs>(
      args: SelectSubset<T, InsightDeleteArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Insight.
     * @param {InsightUpdateArgs} args - Arguments to update one Insight.
     * @example
     * // Update one Insight
     * const insight = await prisma.insight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InsightUpdateArgs>(
      args: SelectSubset<T, InsightUpdateArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Insights.
     * @param {InsightDeleteManyArgs} args - Arguments to filter Insights to delete.
     * @example
     * // Delete a few Insights
     * const { count } = await prisma.insight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InsightDeleteManyArgs>(
      args?: SelectSubset<T, InsightDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InsightUpdateManyArgs>(
      args: SelectSubset<T, InsightUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insights and returns the data updated in the database.
     * @param {InsightUpdateManyAndReturnArgs} args - Arguments to update many Insights.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InsightUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InsightUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Insight.
     * @param {InsightUpsertArgs} args - Arguments to update or create a Insight.
     * @example
     * // Update or create a Insight
     * const insight = await prisma.insight.upsert({
     *   create: {
     *     // ... data to create a Insight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insight we want to update
     *   }
     * })
     */
    upsert<T extends InsightUpsertArgs>(
      args: SelectSubset<T, InsightUpsertArgs<ExtArgs>>
    ): Prisma__InsightClient<
      $Result.GetResult<
        Prisma.$InsightPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCountArgs} args - Arguments to filter Insights to count.
     * @example
     * // Count the number of Insights
     * const count = await prisma.insight.count({
     *   where: {
     *     // ... the filter for the Insights we want to count
     *   }
     * })
     **/
    count<T extends InsightCountArgs>(
      args?: Subset<T, InsightCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], InsightCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InsightAggregateArgs>(
      args: Subset<T, InsightAggregateArgs>
    ): Prisma.PrismaPromise<GetInsightAggregateType<T>>;

    /**
     * Group by Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsightGroupByArgs["orderBy"] }
        : { orderBy?: InsightGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InsightGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetInsightGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Insight model
     */
    readonly fields: InsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsightClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Insight model
   */
  interface InsightFieldRefs {
    readonly id: FieldRef<"Insight", "String">;
    readonly projectId: FieldRef<"Insight", "String">;
    readonly generatedAt: FieldRef<"Insight", "DateTime">;
    readonly type: FieldRef<"Insight", "String">;
    readonly summary: FieldRef<"Insight", "String">;
    readonly metrics: FieldRef<"Insight", "Json">;
  }

  // Custom InputTypes
  /**
   * Insight findUnique
   */
  export type InsightFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput;
  };

  /**
   * Insight findUniqueOrThrow
   */
  export type InsightFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput;
  };

  /**
   * Insight findFirst
   */
  export type InsightFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insights to fetch.
     */
    orderBy?:
      | InsightOrderByWithRelationInput
      | InsightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[];
  };

  /**
   * Insight findFirstOrThrow
   */
  export type InsightFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insights to fetch.
     */
    orderBy?:
      | InsightOrderByWithRelationInput
      | InsightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[];
  };

  /**
   * Insight findMany
   */
  export type InsightFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter, which Insights to fetch.
     */
    where?: InsightWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Insights to fetch.
     */
    orderBy?:
      | InsightOrderByWithRelationInput
      | InsightOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Insights.
     */
    cursor?: InsightWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Insights.
     */
    skip?: number;
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[];
  };

  /**
   * Insight create
   */
  export type InsightCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * The data needed to create a Insight.
     */
    data: XOR<InsightCreateInput, InsightUncheckedCreateInput>;
  };

  /**
   * Insight createMany
   */
  export type InsightCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Insight createManyAndReturn
   */
  export type InsightCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Insight update
   */
  export type InsightUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * The data needed to update a Insight.
     */
    data: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>;
    /**
     * Choose, which Insight to update.
     */
    where: InsightWhereUniqueInput;
  };

  /**
   * Insight updateMany
   */
  export type InsightUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>;
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput;
    /**
     * Limit how many Insights to update.
     */
    limit?: number;
  };

  /**
   * Insight updateManyAndReturn
   */
  export type InsightUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>;
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput;
    /**
     * Limit how many Insights to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Insight upsert
   */
  export type InsightUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * The filter to search for the Insight to update in case it exists.
     */
    where: InsightWhereUniqueInput;
    /**
     * In case the Insight found by the `where` argument doesn't exist, create a new Insight with this data.
     */
    create: XOR<InsightCreateInput, InsightUncheckedCreateInput>;
    /**
     * In case the Insight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>;
  };

  /**
   * Insight delete
   */
  export type InsightDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
    /**
     * Filter which Insight to delete.
     */
    where: InsightWhereUniqueInput;
  };

  /**
   * Insight deleteMany
   */
  export type InsightDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Insights to delete
     */
    where?: InsightWhereInput;
    /**
     * Limit how many Insights to delete.
     */
    limit?: number;
  };

  /**
   * Insight without action
   */
  export type InsightDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null;
  };

  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null;
    _avg: FeedbackAvgAggregateOutputType | null;
    _sum: FeedbackSumAggregateOutputType | null;
    _min: FeedbackMinAggregateOutputType | null;
    _max: FeedbackMaxAggregateOutputType | null;
  };

  export type FeedbackAvgAggregateOutputType = {
    effort: number | null;
    collaboration: number | null;
    reliability: number | null;
  };

  export type FeedbackSumAggregateOutputType = {
    effort: number | null;
    collaboration: number | null;
    reliability: number | null;
  };

  export type FeedbackMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    fromUserId: string | null;
    toUserId: string | null;
    effort: number | null;
    collaboration: number | null;
    reliability: number | null;
    comment: string | null;
    aiFlag: string | null;
    createdAt: Date | null;
  };

  export type FeedbackMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    fromUserId: string | null;
    toUserId: string | null;
    effort: number | null;
    collaboration: number | null;
    reliability: number | null;
    comment: string | null;
    aiFlag: string | null;
    createdAt: Date | null;
  };

  export type FeedbackCountAggregateOutputType = {
    id: number;
    projectId: number;
    fromUserId: number;
    toUserId: number;
    effort: number;
    collaboration: number;
    reliability: number;
    comment: number;
    aiFlag: number;
    createdAt: number;
    _all: number;
  };

  export type FeedbackAvgAggregateInputType = {
    effort?: true;
    collaboration?: true;
    reliability?: true;
  };

  export type FeedbackSumAggregateInputType = {
    effort?: true;
    collaboration?: true;
    reliability?: true;
  };

  export type FeedbackMinAggregateInputType = {
    id?: true;
    projectId?: true;
    fromUserId?: true;
    toUserId?: true;
    effort?: true;
    collaboration?: true;
    reliability?: true;
    comment?: true;
    aiFlag?: true;
    createdAt?: true;
  };

  export type FeedbackMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    fromUserId?: true;
    toUserId?: true;
    effort?: true;
    collaboration?: true;
    reliability?: true;
    comment?: true;
    aiFlag?: true;
    createdAt?: true;
  };

  export type FeedbackCountAggregateInputType = {
    id?: true;
    projectId?: true;
    fromUserId?: true;
    toUserId?: true;
    effort?: true;
    collaboration?: true;
    reliability?: true;
    comment?: true;
    aiFlag?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FeedbackAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Feedbacks
     **/
    _count?: true | FeedbackCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FeedbackAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FeedbackSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeedbackMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeedbackMaxAggregateInputType;
  };

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedback]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>;
  };

  export type FeedbackGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeedbackWhereInput;
    orderBy?:
      | FeedbackOrderByWithAggregationInput
      | FeedbackOrderByWithAggregationInput[];
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum;
    having?: FeedbackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedbackCountAggregateInputType | true;
    _avg?: FeedbackAvgAggregateInputType;
    _sum?: FeedbackSumAggregateInputType;
    _min?: FeedbackMinAggregateInputType;
    _max?: FeedbackMaxAggregateInputType;
  };

  export type FeedbackGroupByOutputType = {
    id: string;
    projectId: string;
    fromUserId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment: string | null;
    aiFlag: string | null;
    createdAt: Date;
    _count: FeedbackCountAggregateOutputType | null;
    _avg: FeedbackAvgAggregateOutputType | null;
    _sum: FeedbackSumAggregateOutputType | null;
    _min: FeedbackMinAggregateOutputType | null;
    _max: FeedbackMaxAggregateOutputType | null;
  };

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FeedbackGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FeedbackGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>;
        }
      >
    >;

  export type FeedbackSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      fromUserId?: boolean;
      toUserId?: boolean;
      effort?: boolean;
      collaboration?: boolean;
      reliability?: boolean;
      comment?: boolean;
      aiFlag?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      fromUser?: boolean | UserDefaultArgs<ExtArgs>;
      toUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["feedback"]
  >;

  export type FeedbackSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      fromUserId?: boolean;
      toUserId?: boolean;
      effort?: boolean;
      collaboration?: boolean;
      reliability?: boolean;
      comment?: boolean;
      aiFlag?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      fromUser?: boolean | UserDefaultArgs<ExtArgs>;
      toUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["feedback"]
  >;

  export type FeedbackSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      fromUserId?: boolean;
      toUserId?: boolean;
      effort?: boolean;
      collaboration?: boolean;
      reliability?: boolean;
      comment?: boolean;
      aiFlag?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      fromUser?: boolean | UserDefaultArgs<ExtArgs>;
      toUser?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["feedback"]
  >;

  export type FeedbackSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    effort?: boolean;
    collaboration?: boolean;
    reliability?: boolean;
    comment?: boolean;
    aiFlag?: boolean;
    createdAt?: boolean;
  };

  export type FeedbackOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "fromUserId"
    | "toUserId"
    | "effort"
    | "collaboration"
    | "reliability"
    | "comment"
    | "aiFlag"
    | "createdAt",
    ExtArgs["result"]["feedback"]
  >;
  export type FeedbackInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    fromUser?: boolean | UserDefaultArgs<ExtArgs>;
    toUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FeedbackIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    fromUser?: boolean | UserDefaultArgs<ExtArgs>;
    toUser?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FeedbackIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    fromUser?: boolean | UserDefaultArgs<ExtArgs>;
    toUser?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FeedbackPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Feedback";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      fromUser: Prisma.$UserPayload<ExtArgs>;
      toUser: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        fromUserId: string;
        toUserId: string;
        effort: number;
        collaboration: number;
        reliability: number;
        comment: string | null;
        aiFlag: string | null;
        createdAt: Date;
      },
      ExtArgs["result"]["feedback"]
    >;
    composites: {};
  };

  type FeedbackGetPayload<
    S extends boolean | null | undefined | FeedbackDefaultArgs,
  > = $Result.GetResult<Prisma.$FeedbackPayload, S>;

  type FeedbackCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FeedbackFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FeedbackCountAggregateInputType | true;
  };

  export interface FeedbackDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Feedback"];
      meta: { name: "Feedback" };
    };
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(
      args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(
      args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     *
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeedbackFindManyArgs>(
      args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     *
     */
    create<T extends FeedbackCreateArgs>(
      args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeedbackCreateManyArgs>(
      args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     *
     */
    delete<T extends FeedbackDeleteArgs>(
      args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeedbackUpdateArgs>(
      args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeedbackUpdateManyArgs>(
      args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(
      args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>
    ): Prisma__FeedbackClient<
      $Result.GetResult<
        Prisma.$FeedbackPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
     **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FeedbackCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FeedbackAggregateArgs>(
      args: Subset<T, FeedbackAggregateArgs>
    ): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>;

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs["orderBy"] }
        : { orderBy?: FeedbackGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFeedbackGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Feedback model
     */
    readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", "String">;
    readonly projectId: FieldRef<"Feedback", "String">;
    readonly fromUserId: FieldRef<"Feedback", "String">;
    readonly toUserId: FieldRef<"Feedback", "String">;
    readonly effort: FieldRef<"Feedback", "Int">;
    readonly collaboration: FieldRef<"Feedback", "Int">;
    readonly reliability: FieldRef<"Feedback", "Int">;
    readonly comment: FieldRef<"Feedback", "String">;
    readonly aiFlag: FieldRef<"Feedback", "String">;
    readonly createdAt: FieldRef<"Feedback", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?:
      | FeedbackOrderByWithRelationInput
      | FeedbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Feedbacks.
     */
    skip?: number;
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[];
  };

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>;
  };

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>;
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<
      FeedbackUpdateManyMutationInput,
      FeedbackUncheckedUpdateManyInput
    >;
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number;
  };

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<
      FeedbackUpdateManyMutationInput,
      FeedbackUncheckedUpdateManyInput
    >;
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput;
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>;
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>;
  };

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput;
  };

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput;
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number;
  };

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null;
  };

  /**
   * Model PresenceLog
   */

  export type AggregatePresenceLog = {
    _count: PresenceLogCountAggregateOutputType | null;
    _avg: PresenceLogAvgAggregateOutputType | null;
    _sum: PresenceLogSumAggregateOutputType | null;
    _min: PresenceLogMinAggregateOutputType | null;
    _max: PresenceLogMaxAggregateOutputType | null;
  };

  export type PresenceLogAvgAggregateOutputType = {
    duration: number | null;
  };

  export type PresenceLogSumAggregateOutputType = {
    duration: number | null;
  };

  export type PresenceLogMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    status: $Enums.PresenceStatus | null;
    sessionStart: Date | null;
    sessionEnd: Date | null;
    duration: number | null;
  };

  export type PresenceLogMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    status: $Enums.PresenceStatus | null;
    sessionStart: Date | null;
    sessionEnd: Date | null;
    duration: number | null;
  };

  export type PresenceLogCountAggregateOutputType = {
    id: number;
    projectId: number;
    userId: number;
    status: number;
    sessionStart: number;
    sessionEnd: number;
    duration: number;
    _all: number;
  };

  export type PresenceLogAvgAggregateInputType = {
    duration?: true;
  };

  export type PresenceLogSumAggregateInputType = {
    duration?: true;
  };

  export type PresenceLogMinAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    sessionStart?: true;
    sessionEnd?: true;
    duration?: true;
  };

  export type PresenceLogMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    sessionStart?: true;
    sessionEnd?: true;
    duration?: true;
  };

  export type PresenceLogCountAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    status?: true;
    sessionStart?: true;
    sessionEnd?: true;
    duration?: true;
    _all?: true;
  };

  export type PresenceLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PresenceLog to aggregate.
     */
    where?: PresenceLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PresenceLogs to fetch.
     */
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PresenceLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PresenceLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PresenceLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PresenceLogs
     **/
    _count?: true | PresenceLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PresenceLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PresenceLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PresenceLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PresenceLogMaxAggregateInputType;
  };

  export type GetPresenceLogAggregateType<T extends PresenceLogAggregateArgs> =
    {
      [P in keyof T & keyof AggregatePresenceLog]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregatePresenceLog[P]>
        : GetScalarType<T[P], AggregatePresenceLog[P]>;
    };

  export type PresenceLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PresenceLogWhereInput;
    orderBy?:
      | PresenceLogOrderByWithAggregationInput
      | PresenceLogOrderByWithAggregationInput[];
    by: PresenceLogScalarFieldEnum[] | PresenceLogScalarFieldEnum;
    having?: PresenceLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PresenceLogCountAggregateInputType | true;
    _avg?: PresenceLogAvgAggregateInputType;
    _sum?: PresenceLogSumAggregateInputType;
    _min?: PresenceLogMinAggregateInputType;
    _max?: PresenceLogMaxAggregateInputType;
  };

  export type PresenceLogGroupByOutputType = {
    id: string;
    projectId: string;
    userId: string;
    status: $Enums.PresenceStatus;
    sessionStart: Date;
    sessionEnd: Date | null;
    duration: number | null;
    _count: PresenceLogCountAggregateOutputType | null;
    _avg: PresenceLogAvgAggregateOutputType | null;
    _sum: PresenceLogSumAggregateOutputType | null;
    _min: PresenceLogMinAggregateOutputType | null;
    _max: PresenceLogMaxAggregateOutputType | null;
  };

  type GetPresenceLogGroupByPayload<T extends PresenceLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PresenceLogGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof PresenceLogGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceLogGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceLogGroupByOutputType[P]>;
        }
      >
    >;

  export type PresenceLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      status?: boolean;
      sessionStart?: boolean;
      sessionEnd?: boolean;
      duration?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["presenceLog"]
  >;

  export type PresenceLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      status?: boolean;
      sessionStart?: boolean;
      sessionEnd?: boolean;
      duration?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["presenceLog"]
  >;

  export type PresenceLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      status?: boolean;
      sessionStart?: boolean;
      sessionEnd?: boolean;
      duration?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["presenceLog"]
  >;

  export type PresenceLogSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    status?: boolean;
    sessionStart?: boolean;
    sessionEnd?: boolean;
    duration?: boolean;
  };

  export type PresenceLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "userId"
    | "status"
    | "sessionStart"
    | "sessionEnd"
    | "duration",
    ExtArgs["result"]["presenceLog"]
  >;
  export type PresenceLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PresenceLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PresenceLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PresenceLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "PresenceLog";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        userId: string;
        status: $Enums.PresenceStatus;
        sessionStart: Date;
        sessionEnd: Date | null;
        duration: number | null;
      },
      ExtArgs["result"]["presenceLog"]
    >;
    composites: {};
  };

  type PresenceLogGetPayload<
    S extends boolean | null | undefined | PresenceLogDefaultArgs,
  > = $Result.GetResult<Prisma.$PresenceLogPayload, S>;

  type PresenceLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PresenceLogFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: PresenceLogCountAggregateInputType | true;
  };

  export interface PresenceLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["PresenceLog"];
      meta: { name: "PresenceLog" };
    };
    /**
     * Find zero or one PresenceLog that matches the filter.
     * @param {PresenceLogFindUniqueArgs} args - Arguments to find a PresenceLog
     * @example
     * // Get one PresenceLog
     * const presenceLog = await prisma.presenceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenceLogFindUniqueArgs>(
      args: SelectSubset<T, PresenceLogFindUniqueArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PresenceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenceLogFindUniqueOrThrowArgs} args - Arguments to find a PresenceLog
     * @example
     * // Get one PresenceLog
     * const presenceLog = await prisma.presenceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenceLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PresenceLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PresenceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogFindFirstArgs} args - Arguments to find a PresenceLog
     * @example
     * // Get one PresenceLog
     * const presenceLog = await prisma.presenceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenceLogFindFirstArgs>(
      args?: SelectSubset<T, PresenceLogFindFirstArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PresenceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogFindFirstOrThrowArgs} args - Arguments to find a PresenceLog
     * @example
     * // Get one PresenceLog
     * const presenceLog = await prisma.presenceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenceLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PresenceLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PresenceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresenceLogs
     * const presenceLogs = await prisma.presenceLog.findMany()
     *
     * // Get first 10 PresenceLogs
     * const presenceLogs = await prisma.presenceLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const presenceLogWithIdOnly = await prisma.presenceLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PresenceLogFindManyArgs>(
      args?: SelectSubset<T, PresenceLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PresenceLog.
     * @param {PresenceLogCreateArgs} args - Arguments to create a PresenceLog.
     * @example
     * // Create one PresenceLog
     * const PresenceLog = await prisma.presenceLog.create({
     *   data: {
     *     // ... data to create a PresenceLog
     *   }
     * })
     *
     */
    create<T extends PresenceLogCreateArgs>(
      args: SelectSubset<T, PresenceLogCreateArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PresenceLogs.
     * @param {PresenceLogCreateManyArgs} args - Arguments to create many PresenceLogs.
     * @example
     * // Create many PresenceLogs
     * const presenceLog = await prisma.presenceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PresenceLogCreateManyArgs>(
      args?: SelectSubset<T, PresenceLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PresenceLogs and returns the data saved in the database.
     * @param {PresenceLogCreateManyAndReturnArgs} args - Arguments to create many PresenceLogs.
     * @example
     * // Create many PresenceLogs
     * const presenceLog = await prisma.presenceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PresenceLogs and only return the `id`
     * const presenceLogWithIdOnly = await prisma.presenceLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PresenceLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PresenceLogCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PresenceLog.
     * @param {PresenceLogDeleteArgs} args - Arguments to delete one PresenceLog.
     * @example
     * // Delete one PresenceLog
     * const PresenceLog = await prisma.presenceLog.delete({
     *   where: {
     *     // ... filter to delete one PresenceLog
     *   }
     * })
     *
     */
    delete<T extends PresenceLogDeleteArgs>(
      args: SelectSubset<T, PresenceLogDeleteArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PresenceLog.
     * @param {PresenceLogUpdateArgs} args - Arguments to update one PresenceLog.
     * @example
     * // Update one PresenceLog
     * const presenceLog = await prisma.presenceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PresenceLogUpdateArgs>(
      args: SelectSubset<T, PresenceLogUpdateArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PresenceLogs.
     * @param {PresenceLogDeleteManyArgs} args - Arguments to filter PresenceLogs to delete.
     * @example
     * // Delete a few PresenceLogs
     * const { count } = await prisma.presenceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PresenceLogDeleteManyArgs>(
      args?: SelectSubset<T, PresenceLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PresenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresenceLogs
     * const presenceLog = await prisma.presenceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PresenceLogUpdateManyArgs>(
      args: SelectSubset<T, PresenceLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PresenceLogs and returns the data updated in the database.
     * @param {PresenceLogUpdateManyAndReturnArgs} args - Arguments to update many PresenceLogs.
     * @example
     * // Update many PresenceLogs
     * const presenceLog = await prisma.presenceLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PresenceLogs and only return the `id`
     * const presenceLogWithIdOnly = await prisma.presenceLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PresenceLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PresenceLogUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PresenceLog.
     * @param {PresenceLogUpsertArgs} args - Arguments to update or create a PresenceLog.
     * @example
     * // Update or create a PresenceLog
     * const presenceLog = await prisma.presenceLog.upsert({
     *   create: {
     *     // ... data to create a PresenceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresenceLog we want to update
     *   }
     * })
     */
    upsert<T extends PresenceLogUpsertArgs>(
      args: SelectSubset<T, PresenceLogUpsertArgs<ExtArgs>>
    ): Prisma__PresenceLogClient<
      $Result.GetResult<
        Prisma.$PresenceLogPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PresenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogCountArgs} args - Arguments to filter PresenceLogs to count.
     * @example
     * // Count the number of PresenceLogs
     * const count = await prisma.presenceLog.count({
     *   where: {
     *     // ... the filter for the PresenceLogs we want to count
     *   }
     * })
     **/
    count<T extends PresenceLogCountArgs>(
      args?: Subset<T, PresenceLogCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PresenceLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PresenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PresenceLogAggregateArgs>(
      args: Subset<T, PresenceLogAggregateArgs>
    ): Prisma.PrismaPromise<GetPresenceLogAggregateType<T>>;

    /**
     * Group by PresenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PresenceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenceLogGroupByArgs["orderBy"] }
        : { orderBy?: PresenceLogGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PresenceLogGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetPresenceLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PresenceLog model
     */
    readonly fields: PresenceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresenceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenceLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PresenceLog model
   */
  interface PresenceLogFieldRefs {
    readonly id: FieldRef<"PresenceLog", "String">;
    readonly projectId: FieldRef<"PresenceLog", "String">;
    readonly userId: FieldRef<"PresenceLog", "String">;
    readonly status: FieldRef<"PresenceLog", "PresenceStatus">;
    readonly sessionStart: FieldRef<"PresenceLog", "DateTime">;
    readonly sessionEnd: FieldRef<"PresenceLog", "DateTime">;
    readonly duration: FieldRef<"PresenceLog", "Int">;
  }

  // Custom InputTypes
  /**
   * PresenceLog findUnique
   */
  export type PresenceLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter, which PresenceLog to fetch.
     */
    where: PresenceLogWhereUniqueInput;
  };

  /**
   * PresenceLog findUniqueOrThrow
   */
  export type PresenceLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter, which PresenceLog to fetch.
     */
    where: PresenceLogWhereUniqueInput;
  };

  /**
   * PresenceLog findFirst
   */
  export type PresenceLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter, which PresenceLog to fetch.
     */
    where?: PresenceLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PresenceLogs to fetch.
     */
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PresenceLogs.
     */
    cursor?: PresenceLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PresenceLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PresenceLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PresenceLogs.
     */
    distinct?: PresenceLogScalarFieldEnum | PresenceLogScalarFieldEnum[];
  };

  /**
   * PresenceLog findFirstOrThrow
   */
  export type PresenceLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter, which PresenceLog to fetch.
     */
    where?: PresenceLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PresenceLogs to fetch.
     */
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PresenceLogs.
     */
    cursor?: PresenceLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PresenceLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PresenceLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PresenceLogs.
     */
    distinct?: PresenceLogScalarFieldEnum | PresenceLogScalarFieldEnum[];
  };

  /**
   * PresenceLog findMany
   */
  export type PresenceLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter, which PresenceLogs to fetch.
     */
    where?: PresenceLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PresenceLogs to fetch.
     */
    orderBy?:
      | PresenceLogOrderByWithRelationInput
      | PresenceLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PresenceLogs.
     */
    cursor?: PresenceLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PresenceLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PresenceLogs.
     */
    skip?: number;
    distinct?: PresenceLogScalarFieldEnum | PresenceLogScalarFieldEnum[];
  };

  /**
   * PresenceLog create
   */
  export type PresenceLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a PresenceLog.
     */
    data: XOR<PresenceLogCreateInput, PresenceLogUncheckedCreateInput>;
  };

  /**
   * PresenceLog createMany
   */
  export type PresenceLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PresenceLogs.
     */
    data: PresenceLogCreateManyInput | PresenceLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PresenceLog createManyAndReturn
   */
  export type PresenceLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * The data used to create many PresenceLogs.
     */
    data: PresenceLogCreateManyInput | PresenceLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PresenceLog update
   */
  export type PresenceLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a PresenceLog.
     */
    data: XOR<PresenceLogUpdateInput, PresenceLogUncheckedUpdateInput>;
    /**
     * Choose, which PresenceLog to update.
     */
    where: PresenceLogWhereUniqueInput;
  };

  /**
   * PresenceLog updateMany
   */
  export type PresenceLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PresenceLogs.
     */
    data: XOR<
      PresenceLogUpdateManyMutationInput,
      PresenceLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which PresenceLogs to update
     */
    where?: PresenceLogWhereInput;
    /**
     * Limit how many PresenceLogs to update.
     */
    limit?: number;
  };

  /**
   * PresenceLog updateManyAndReturn
   */
  export type PresenceLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * The data used to update PresenceLogs.
     */
    data: XOR<
      PresenceLogUpdateManyMutationInput,
      PresenceLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which PresenceLogs to update
     */
    where?: PresenceLogWhereInput;
    /**
     * Limit how many PresenceLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PresenceLog upsert
   */
  export type PresenceLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the PresenceLog to update in case it exists.
     */
    where: PresenceLogWhereUniqueInput;
    /**
     * In case the PresenceLog found by the `where` argument doesn't exist, create a new PresenceLog with this data.
     */
    create: XOR<PresenceLogCreateInput, PresenceLogUncheckedCreateInput>;
    /**
     * In case the PresenceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenceLogUpdateInput, PresenceLogUncheckedUpdateInput>;
  };

  /**
   * PresenceLog delete
   */
  export type PresenceLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
    /**
     * Filter which PresenceLog to delete.
     */
    where: PresenceLogWhereUniqueInput;
  };

  /**
   * PresenceLog deleteMany
   */
  export type PresenceLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PresenceLogs to delete
     */
    where?: PresenceLogWhereInput;
    /**
     * Limit how many PresenceLogs to delete.
     */
    limit?: number;
  };

  /**
   * PresenceLog without action
   */
  export type PresenceLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PresenceLog
     */
    select?: PresenceLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PresenceLog
     */
    omit?: PresenceLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceLogInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    avatarUrl: "avatarUrl";
    oauthProvider: "oauthProvider";
    oauthId: "oauthId";
    createdAt: "createdAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const UserOAuthScalarFieldEnum: {
    id: "id";
    userId: "userId";
    provider: "provider";
    providerUserId: "providerUserId";
    accessTokenEnc: "accessTokenEnc";
    tokenExpiresAt: "tokenExpiresAt";
    scopes: "scopes";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserOAuthScalarFieldEnum =
    (typeof UserOAuthScalarFieldEnum)[keyof typeof UserOAuthScalarFieldEnum];

  export const RefreshTokenScalarFieldEnum: {
    id: "id";
    userId: "userId";
    hashedToken: "hashedToken";
    expiresAt: "expiresAt";
    revokedAt: "revokedAt";
    replacedByToken: "replacedByToken";
    createdAt: "createdAt";
    lastUsedAt: "lastUsedAt";
    userAgent: "userAgent";
    ipAddress: "ipAddress";
    location: "location";
    deviceName: "deviceName";
  };

  export type RefreshTokenScalarFieldEnum =
    (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    githubRepo: "githubRepo";
    createdById: "createdById";
    createdAt: "createdAt";
    lastActive: "lastActive";
  };

  export type ProjectScalarFieldEnum =
    (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const ProjectMemberScalarFieldEnum: {
    id: "id";
    userId: "userId";
    projectId: "projectId";
    role: "role";
    status: "status";
    joinedAt: "joinedAt";
  };

  export type ProjectMemberScalarFieldEnum =
    (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum];

  export const TaskScalarFieldEnum: {
    id: "id";
    priority: "priority";
    projectId: "projectId";
    title: "title";
    description: "description";
    weight: "weight";
    status: "status";
    assigneeId: "assigneeId";
    createdAt: "createdAt";
    completedAt: "completedAt";
    score: "score";
  };

  export type TaskScalarFieldEnum =
    (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

  export const ChatMessageScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    senderId: "senderId";
    message: "message";
    type: "type";
    aiLabel: "aiLabel";
    createdAt: "createdAt";
  };

  export type ChatMessageScalarFieldEnum =
    (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum];

  export const GitHubActivityScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    userId: "userId";
    commitCount: "commitCount";
    prCount: "prCount";
    linesAdded: "linesAdded";
    linesDeleted: "linesDeleted";
    weekStart: "weekStart";
    commitDetails: "commitDetails";
  };

  export type GitHubActivityScalarFieldEnum =
    (typeof GitHubActivityScalarFieldEnum)[keyof typeof GitHubActivityScalarFieldEnum];

  export const GoogleDocsDataScalarFieldEnum: {
    id: "id";
    userId: "userId";
    editsCount: "editsCount";
    lastActivity: "lastActivity";
  };

  export type GoogleDocsDataScalarFieldEnum =
    (typeof GoogleDocsDataScalarFieldEnum)[keyof typeof GoogleDocsDataScalarFieldEnum];

  export const InsightScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    generatedAt: "generatedAt";
    type: "type";
    summary: "summary";
    metrics: "metrics";
  };

  export type InsightScalarFieldEnum =
    (typeof InsightScalarFieldEnum)[keyof typeof InsightScalarFieldEnum];

  export const FeedbackScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    fromUserId: "fromUserId";
    toUserId: "toUserId";
    effort: "effort";
    collaboration: "collaboration";
    reliability: "reliability";
    comment: "comment";
    aiFlag: "aiFlag";
    createdAt: "createdAt";
  };

  export type FeedbackScalarFieldEnum =
    (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];

  export const PresenceLogScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    userId: "userId";
    status: "status";
    sessionStart: "sessionStart";
    sessionEnd: "sessionEnd";
    duration: "duration";
  };

  export type PresenceLogScalarFieldEnum =
    (typeof PresenceLogScalarFieldEnum)[keyof typeof PresenceLogScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'ProjectRole'
   */
  export type EnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ProjectRole"
  >;

  /**
   * Reference to a field of type 'ProjectRole[]'
   */
  export type ListEnumProjectRoleFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ProjectRole[]">;

  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "MemberStatus"
  >;

  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "MemberStatus[]">;

  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "TaskPriority"
  >;

  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TaskPriority[]">;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "TaskStatus"
  >;

  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "TaskStatus[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'PresenceStatus'
   */
  export type EnumPresenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "PresenceStatus"
  >;

  /**
   * Reference to a field of type 'PresenceStatus[]'
   */
  export type ListEnumPresenceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "PresenceStatus[]">;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    avatarUrl?: StringNullableFilter<"User"> | string | null;
    oauthProvider?: StringFilter<"User"> | string;
    oauthId?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    oauthAccounts?: UserOAuthListRelationFilter;
    projectsCreated?: ProjectListRelationFilter;
    googleDocsData?: XOR<
      GoogleDocsDataNullableScalarRelationFilter,
      GoogleDocsDataWhereInput
    > | null;
    memberships?: ProjectMemberListRelationFilter;
    messages?: ChatMessageListRelationFilter;
    tasks?: TaskListRelationFilter;
    feedbackGiven?: FeedbackListRelationFilter;
    feedbackReceived?: FeedbackListRelationFilter;
    githubActivities?: GitHubActivityListRelationFilter;
    presenceLogs?: PresenceLogListRelationFilter;
    refreshTokens?: RefreshTokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    oauthProvider?: SortOrder;
    oauthId?: SortOrder;
    createdAt?: SortOrder;
    oauthAccounts?: UserOAuthOrderByRelationAggregateInput;
    projectsCreated?: ProjectOrderByRelationAggregateInput;
    googleDocsData?: GoogleDocsDataOrderByWithRelationInput;
    memberships?: ProjectMemberOrderByRelationAggregateInput;
    messages?: ChatMessageOrderByRelationAggregateInput;
    tasks?: TaskOrderByRelationAggregateInput;
    feedbackGiven?: FeedbackOrderByRelationAggregateInput;
    feedbackReceived?: FeedbackOrderByRelationAggregateInput;
    githubActivities?: GitHubActivityOrderByRelationAggregateInput;
    presenceLogs?: PresenceLogOrderByRelationAggregateInput;
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      oauthId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      avatarUrl?: StringNullableFilter<"User"> | string | null;
      oauthProvider?: StringFilter<"User"> | string;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      oauthAccounts?: UserOAuthListRelationFilter;
      projectsCreated?: ProjectListRelationFilter;
      googleDocsData?: XOR<
        GoogleDocsDataNullableScalarRelationFilter,
        GoogleDocsDataWhereInput
      > | null;
      memberships?: ProjectMemberListRelationFilter;
      messages?: ChatMessageListRelationFilter;
      tasks?: TaskListRelationFilter;
      feedbackGiven?: FeedbackListRelationFilter;
      feedbackReceived?: FeedbackListRelationFilter;
      githubActivities?: GitHubActivityListRelationFilter;
      presenceLogs?: PresenceLogListRelationFilter;
      refreshTokens?: RefreshTokenListRelationFilter;
    },
    "id" | "email" | "oauthId"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    oauthProvider?: SortOrder;
    oauthId?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null;
    oauthProvider?: StringWithAggregatesFilter<"User"> | string;
    oauthId?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type UserOAuthWhereInput = {
    AND?: UserOAuthWhereInput | UserOAuthWhereInput[];
    OR?: UserOAuthWhereInput[];
    NOT?: UserOAuthWhereInput | UserOAuthWhereInput[];
    id?: StringFilter<"UserOAuth"> | string;
    userId?: StringFilter<"UserOAuth"> | string;
    provider?: StringFilter<"UserOAuth"> | string;
    providerUserId?: StringFilter<"UserOAuth"> | string;
    accessTokenEnc?: StringFilter<"UserOAuth"> | string;
    tokenExpiresAt?: DateTimeNullableFilter<"UserOAuth"> | Date | string | null;
    scopes?: StringNullableFilter<"UserOAuth"> | string | null;
    createdAt?: DateTimeFilter<"UserOAuth"> | Date | string;
    updatedAt?: DateTimeFilter<"UserOAuth"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type UserOAuthOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    provider?: SortOrder;
    providerUserId?: SortOrder;
    accessTokenEnc?: SortOrder;
    tokenExpiresAt?: SortOrderInput | SortOrder;
    scopes?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type UserOAuthWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      provider_providerUserId?: UserOAuthProviderProviderUserIdCompoundUniqueInput;
      AND?: UserOAuthWhereInput | UserOAuthWhereInput[];
      OR?: UserOAuthWhereInput[];
      NOT?: UserOAuthWhereInput | UserOAuthWhereInput[];
      userId?: StringFilter<"UserOAuth"> | string;
      provider?: StringFilter<"UserOAuth"> | string;
      providerUserId?: StringFilter<"UserOAuth"> | string;
      accessTokenEnc?: StringFilter<"UserOAuth"> | string;
      tokenExpiresAt?:
        | DateTimeNullableFilter<"UserOAuth">
        | Date
        | string
        | null;
      scopes?: StringNullableFilter<"UserOAuth"> | string | null;
      createdAt?: DateTimeFilter<"UserOAuth"> | Date | string;
      updatedAt?: DateTimeFilter<"UserOAuth"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "provider_providerUserId"
  >;

  export type UserOAuthOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    provider?: SortOrder;
    providerUserId?: SortOrder;
    accessTokenEnc?: SortOrder;
    tokenExpiresAt?: SortOrderInput | SortOrder;
    scopes?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserOAuthCountOrderByAggregateInput;
    _max?: UserOAuthMaxOrderByAggregateInput;
    _min?: UserOAuthMinOrderByAggregateInput;
  };

  export type UserOAuthScalarWhereWithAggregatesInput = {
    AND?:
      | UserOAuthScalarWhereWithAggregatesInput
      | UserOAuthScalarWhereWithAggregatesInput[];
    OR?: UserOAuthScalarWhereWithAggregatesInput[];
    NOT?:
      | UserOAuthScalarWhereWithAggregatesInput
      | UserOAuthScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserOAuth"> | string;
    userId?: StringWithAggregatesFilter<"UserOAuth"> | string;
    provider?: StringWithAggregatesFilter<"UserOAuth"> | string;
    providerUserId?: StringWithAggregatesFilter<"UserOAuth"> | string;
    accessTokenEnc?: StringWithAggregatesFilter<"UserOAuth"> | string;
    tokenExpiresAt?:
      | DateTimeNullableWithAggregatesFilter<"UserOAuth">
      | Date
      | string
      | null;
    scopes?: StringNullableWithAggregatesFilter<"UserOAuth"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"UserOAuth"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"UserOAuth"> | Date | string;
  };

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    OR?: RefreshTokenWhereInput[];
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    id?: StringFilter<"RefreshToken"> | string;
    userId?: StringFilter<"RefreshToken"> | string;
    hashedToken?: StringFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null;
    replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null;
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    lastUsedAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null;
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null;
    location?: StringNullableFilter<"RefreshToken"> | string | null;
    deviceName?: StringNullableFilter<"RefreshToken"> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    hashedToken?: SortOrder;
    expiresAt?: SortOrder;
    revokedAt?: SortOrderInput | SortOrder;
    replacedByToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    lastUsedAt?: SortOrder;
    userAgent?: SortOrderInput | SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    deviceName?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      OR?: RefreshTokenWhereInput[];
      NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      userId?: StringFilter<"RefreshToken"> | string;
      hashedToken?: StringFilter<"RefreshToken"> | string;
      expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
      revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null;
      replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null;
      createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
      lastUsedAt?: DateTimeFilter<"RefreshToken"> | Date | string;
      userAgent?: StringNullableFilter<"RefreshToken"> | string | null;
      ipAddress?: StringNullableFilter<"RefreshToken"> | string | null;
      location?: StringNullableFilter<"RefreshToken"> | string | null;
      deviceName?: StringNullableFilter<"RefreshToken"> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    hashedToken?: SortOrder;
    expiresAt?: SortOrder;
    revokedAt?: SortOrderInput | SortOrder;
    replacedByToken?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    lastUsedAt?: SortOrder;
    userAgent?: SortOrderInput | SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    deviceName?: SortOrderInput | SortOrder;
    _count?: RefreshTokenCountOrderByAggregateInput;
    _max?: RefreshTokenMaxOrderByAggregateInput;
    _min?: RefreshTokenMinOrderByAggregateInput;
  };

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    OR?: RefreshTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"RefreshToken"> | string;
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string;
    hashedToken?: StringWithAggregatesFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string;
    revokedAt?:
      | DateTimeNullableWithAggregatesFilter<"RefreshToken">
      | Date
      | string
      | null;
    replacedByToken?:
      | StringNullableWithAggregatesFilter<"RefreshToken">
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string;
    lastUsedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string;
    userAgent?:
      | StringNullableWithAggregatesFilter<"RefreshToken">
      | string
      | null;
    ipAddress?:
      | StringNullableWithAggregatesFilter<"RefreshToken">
      | string
      | null;
    location?:
      | StringNullableWithAggregatesFilter<"RefreshToken">
      | string
      | null;
    deviceName?:
      | StringNullableWithAggregatesFilter<"RefreshToken">
      | string
      | null;
  };

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[];
    OR?: ProjectWhereInput[];
    NOT?: ProjectWhereInput | ProjectWhereInput[];
    id?: StringFilter<"Project"> | string;
    name?: StringFilter<"Project"> | string;
    description?: StringNullableFilter<"Project"> | string | null;
    githubRepo?: StringFilter<"Project"> | string;
    createdById?: StringFilter<"Project"> | string;
    createdAt?: DateTimeFilter<"Project"> | Date | string;
    lastActive?: DateTimeNullableFilter<"Project"> | Date | string | null;
    members?: ProjectMemberListRelationFilter;
    tasks?: TaskListRelationFilter;
    chatMessages?: ChatMessageListRelationFilter;
    feedbacks?: FeedbackListRelationFilter;
    githubData?: GitHubActivityListRelationFilter;
    insights?: InsightListRelationFilter;
    presenceLogs?: PresenceLogListRelationFilter;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    githubRepo?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    lastActive?: SortOrderInput | SortOrder;
    members?: ProjectMemberOrderByRelationAggregateInput;
    tasks?: TaskOrderByRelationAggregateInput;
    chatMessages?: ChatMessageOrderByRelationAggregateInput;
    feedbacks?: FeedbackOrderByRelationAggregateInput;
    githubData?: GitHubActivityOrderByRelationAggregateInput;
    insights?: InsightOrderByRelationAggregateInput;
    presenceLogs?: PresenceLogOrderByRelationAggregateInput;
    createdBy?: UserOrderByWithRelationInput;
  };

  export type ProjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProjectWhereInput | ProjectWhereInput[];
      OR?: ProjectWhereInput[];
      NOT?: ProjectWhereInput | ProjectWhereInput[];
      name?: StringFilter<"Project"> | string;
      description?: StringNullableFilter<"Project"> | string | null;
      githubRepo?: StringFilter<"Project"> | string;
      createdById?: StringFilter<"Project"> | string;
      createdAt?: DateTimeFilter<"Project"> | Date | string;
      lastActive?: DateTimeNullableFilter<"Project"> | Date | string | null;
      members?: ProjectMemberListRelationFilter;
      tasks?: TaskListRelationFilter;
      chatMessages?: ChatMessageListRelationFilter;
      feedbacks?: FeedbackListRelationFilter;
      githubData?: GitHubActivityListRelationFilter;
      insights?: InsightListRelationFilter;
      presenceLogs?: PresenceLogListRelationFilter;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    githubRepo?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    lastActive?: SortOrderInput | SortOrder;
    _count?: ProjectCountOrderByAggregateInput;
    _max?: ProjectMaxOrderByAggregateInput;
    _min?: ProjectMinOrderByAggregateInput;
  };

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[];
    OR?: ProjectScalarWhereWithAggregatesInput[];
    NOT?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Project"> | string;
    name?: StringWithAggregatesFilter<"Project"> | string;
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null;
    githubRepo?: StringWithAggregatesFilter<"Project"> | string;
    createdById?: StringWithAggregatesFilter<"Project"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string;
    lastActive?:
      | DateTimeNullableWithAggregatesFilter<"Project">
      | Date
      | string
      | null;
  };

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[];
    OR?: ProjectMemberWhereInput[];
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[];
    id?: StringFilter<"ProjectMember"> | string;
    userId?: StringFilter<"ProjectMember"> | string;
    projectId?: StringFilter<"ProjectMember"> | string;
    role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole;
    status?: EnumMemberStatusFilter<"ProjectMember"> | $Enums.MemberStatus;
    joinedAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
  };

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectId?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    project?: ProjectOrderByWithRelationInput;
  };

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_projectId?: ProjectMemberUserIdProjectIdCompoundUniqueInput;
      AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[];
      OR?: ProjectMemberWhereInput[];
      NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[];
      userId?: StringFilter<"ProjectMember"> | string;
      projectId?: StringFilter<"ProjectMember"> | string;
      role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole;
      status?: EnumMemberStatusFilter<"ProjectMember"> | $Enums.MemberStatus;
      joinedAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    },
    "id" | "userId_projectId"
  >;

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectId?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrderInput | SortOrder;
    _count?: ProjectMemberCountOrderByAggregateInput;
    _max?: ProjectMemberMaxOrderByAggregateInput;
    _min?: ProjectMemberMinOrderByAggregateInput;
  };

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectMemberScalarWhereWithAggregatesInput
      | ProjectMemberScalarWhereWithAggregatesInput[];
    OR?: ProjectMemberScalarWhereWithAggregatesInput[];
    NOT?:
      | ProjectMemberScalarWhereWithAggregatesInput
      | ProjectMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProjectMember"> | string;
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string;
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string;
    role?:
      | EnumProjectRoleWithAggregatesFilter<"ProjectMember">
      | $Enums.ProjectRole;
    status?:
      | EnumMemberStatusWithAggregatesFilter<"ProjectMember">
      | $Enums.MemberStatus;
    joinedAt?:
      | DateTimeNullableWithAggregatesFilter<"ProjectMember">
      | Date
      | string
      | null;
  };

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[];
    OR?: TaskWhereInput[];
    NOT?: TaskWhereInput | TaskWhereInput[];
    id?: StringFilter<"Task"> | string;
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
    projectId?: StringFilter<"Task"> | string;
    title?: StringFilter<"Task"> | string;
    description?: StringNullableFilter<"Task"> | string | null;
    weight?: FloatFilter<"Task"> | number;
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    assigneeId?: StringNullableFilter<"Task"> | string | null;
    createdAt?: DateTimeFilter<"Task"> | Date | string;
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null;
    score?: FloatNullableFilter<"Task"> | number | null;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder;
    priority?: SortOrder;
    projectId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    weight?: SortOrder;
    status?: SortOrder;
    assigneeId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    score?: SortOrderInput | SortOrder;
    project?: ProjectOrderByWithRelationInput;
    assignee?: UserOrderByWithRelationInput;
  };

  export type TaskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TaskWhereInput | TaskWhereInput[];
      OR?: TaskWhereInput[];
      NOT?: TaskWhereInput | TaskWhereInput[];
      priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
      projectId?: StringFilter<"Task"> | string;
      title?: StringFilter<"Task"> | string;
      description?: StringNullableFilter<"Task"> | string | null;
      weight?: FloatFilter<"Task"> | number;
      status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
      assigneeId?: StringNullableFilter<"Task"> | string | null;
      createdAt?: DateTimeFilter<"Task"> | Date | string;
      completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null;
      score?: FloatNullableFilter<"Task"> | number | null;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    "id"
  >;

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder;
    priority?: SortOrder;
    projectId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    weight?: SortOrder;
    status?: SortOrder;
    assigneeId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrderInput | SortOrder;
    score?: SortOrderInput | SortOrder;
    _count?: TaskCountOrderByAggregateInput;
    _avg?: TaskAvgOrderByAggregateInput;
    _max?: TaskMaxOrderByAggregateInput;
    _min?: TaskMinOrderByAggregateInput;
    _sum?: TaskSumOrderByAggregateInput;
  };

  export type TaskScalarWhereWithAggregatesInput = {
    AND?:
      | TaskScalarWhereWithAggregatesInput
      | TaskScalarWhereWithAggregatesInput[];
    OR?: TaskScalarWhereWithAggregatesInput[];
    NOT?:
      | TaskScalarWhereWithAggregatesInput
      | TaskScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Task"> | string;
    priority?:
      | EnumTaskPriorityWithAggregatesFilter<"Task">
      | $Enums.TaskPriority;
    projectId?: StringWithAggregatesFilter<"Task"> | string;
    title?: StringWithAggregatesFilter<"Task"> | string;
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null;
    weight?: FloatWithAggregatesFilter<"Task"> | number;
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    assigneeId?: StringNullableWithAggregatesFilter<"Task"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string;
    completedAt?:
      | DateTimeNullableWithAggregatesFilter<"Task">
      | Date
      | string
      | null;
    score?: FloatNullableWithAggregatesFilter<"Task"> | number | null;
  };

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[];
    OR?: ChatMessageWhereInput[];
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[];
    id?: StringFilter<"ChatMessage"> | string;
    projectId?: StringFilter<"ChatMessage"> | string;
    senderId?: StringFilter<"ChatMessage"> | string;
    message?: StringFilter<"ChatMessage"> | string;
    type?: StringFilter<"ChatMessage"> | string;
    aiLabel?: StringNullableFilter<"ChatMessage"> | string | null;
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    senderId?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    aiLabel?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
    sender?: UserOrderByWithRelationInput;
  };

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ChatMessageWhereInput | ChatMessageWhereInput[];
      OR?: ChatMessageWhereInput[];
      NOT?: ChatMessageWhereInput | ChatMessageWhereInput[];
      projectId?: StringFilter<"ChatMessage"> | string;
      senderId?: StringFilter<"ChatMessage"> | string;
      message?: StringFilter<"ChatMessage"> | string;
      type?: StringFilter<"ChatMessage"> | string;
      aiLabel?: StringNullableFilter<"ChatMessage"> | string | null;
      createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      sender?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    senderId?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    aiLabel?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: ChatMessageCountOrderByAggregateInput;
    _max?: ChatMessageMaxOrderByAggregateInput;
    _min?: ChatMessageMinOrderByAggregateInput;
  };

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?:
      | ChatMessageScalarWhereWithAggregatesInput
      | ChatMessageScalarWhereWithAggregatesInput[];
    OR?: ChatMessageScalarWhereWithAggregatesInput[];
    NOT?:
      | ChatMessageScalarWhereWithAggregatesInput
      | ChatMessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ChatMessage"> | string;
    projectId?: StringWithAggregatesFilter<"ChatMessage"> | string;
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string;
    message?: StringWithAggregatesFilter<"ChatMessage"> | string;
    type?: StringWithAggregatesFilter<"ChatMessage"> | string;
    aiLabel?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string;
  };

  export type GitHubActivityWhereInput = {
    AND?: GitHubActivityWhereInput | GitHubActivityWhereInput[];
    OR?: GitHubActivityWhereInput[];
    NOT?: GitHubActivityWhereInput | GitHubActivityWhereInput[];
    id?: StringFilter<"GitHubActivity"> | string;
    projectId?: StringFilter<"GitHubActivity"> | string;
    userId?: StringFilter<"GitHubActivity"> | string;
    commitCount?: IntFilter<"GitHubActivity"> | number;
    prCount?: IntFilter<"GitHubActivity"> | number;
    linesAdded?: IntFilter<"GitHubActivity"> | number;
    linesDeleted?: IntFilter<"GitHubActivity"> | number;
    weekStart?: DateTimeFilter<"GitHubActivity"> | Date | string;
    commitDetails?: JsonNullableFilter<"GitHubActivity">;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type GitHubActivityOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
    weekStart?: SortOrder;
    commitDetails?: SortOrderInput | SortOrder;
    project?: ProjectOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type GitHubActivityWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      projectId_userId_weekStart?: GitHubActivityProjectIdUserIdWeekStartCompoundUniqueInput;
      AND?: GitHubActivityWhereInput | GitHubActivityWhereInput[];
      OR?: GitHubActivityWhereInput[];
      NOT?: GitHubActivityWhereInput | GitHubActivityWhereInput[];
      projectId?: StringFilter<"GitHubActivity"> | string;
      userId?: StringFilter<"GitHubActivity"> | string;
      commitCount?: IntFilter<"GitHubActivity"> | number;
      prCount?: IntFilter<"GitHubActivity"> | number;
      linesAdded?: IntFilter<"GitHubActivity"> | number;
      linesDeleted?: IntFilter<"GitHubActivity"> | number;
      weekStart?: DateTimeFilter<"GitHubActivity"> | Date | string;
      commitDetails?: JsonNullableFilter<"GitHubActivity">;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "projectId_userId_weekStart"
  >;

  export type GitHubActivityOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
    weekStart?: SortOrder;
    commitDetails?: SortOrderInput | SortOrder;
    _count?: GitHubActivityCountOrderByAggregateInput;
    _avg?: GitHubActivityAvgOrderByAggregateInput;
    _max?: GitHubActivityMaxOrderByAggregateInput;
    _min?: GitHubActivityMinOrderByAggregateInput;
    _sum?: GitHubActivitySumOrderByAggregateInput;
  };

  export type GitHubActivityScalarWhereWithAggregatesInput = {
    AND?:
      | GitHubActivityScalarWhereWithAggregatesInput
      | GitHubActivityScalarWhereWithAggregatesInput[];
    OR?: GitHubActivityScalarWhereWithAggregatesInput[];
    NOT?:
      | GitHubActivityScalarWhereWithAggregatesInput
      | GitHubActivityScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"GitHubActivity"> | string;
    projectId?: StringWithAggregatesFilter<"GitHubActivity"> | string;
    userId?: StringWithAggregatesFilter<"GitHubActivity"> | string;
    commitCount?: IntWithAggregatesFilter<"GitHubActivity"> | number;
    prCount?: IntWithAggregatesFilter<"GitHubActivity"> | number;
    linesAdded?: IntWithAggregatesFilter<"GitHubActivity"> | number;
    linesDeleted?: IntWithAggregatesFilter<"GitHubActivity"> | number;
    weekStart?: DateTimeWithAggregatesFilter<"GitHubActivity"> | Date | string;
    commitDetails?: JsonNullableWithAggregatesFilter<"GitHubActivity">;
  };

  export type GoogleDocsDataWhereInput = {
    AND?: GoogleDocsDataWhereInput | GoogleDocsDataWhereInput[];
    OR?: GoogleDocsDataWhereInput[];
    NOT?: GoogleDocsDataWhereInput | GoogleDocsDataWhereInput[];
    id?: StringFilter<"GoogleDocsData"> | string;
    userId?: StringFilter<"GoogleDocsData"> | string;
    editsCount?: IntNullableFilter<"GoogleDocsData"> | number | null;
    lastActivity?:
      | DateTimeNullableFilter<"GoogleDocsData">
      | Date
      | string
      | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type GoogleDocsDataOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    editsCount?: SortOrderInput | SortOrder;
    lastActivity?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type GoogleDocsDataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: GoogleDocsDataWhereInput | GoogleDocsDataWhereInput[];
      OR?: GoogleDocsDataWhereInput[];
      NOT?: GoogleDocsDataWhereInput | GoogleDocsDataWhereInput[];
      editsCount?: IntNullableFilter<"GoogleDocsData"> | number | null;
      lastActivity?:
        | DateTimeNullableFilter<"GoogleDocsData">
        | Date
        | string
        | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type GoogleDocsDataOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    editsCount?: SortOrderInput | SortOrder;
    lastActivity?: SortOrderInput | SortOrder;
    _count?: GoogleDocsDataCountOrderByAggregateInput;
    _avg?: GoogleDocsDataAvgOrderByAggregateInput;
    _max?: GoogleDocsDataMaxOrderByAggregateInput;
    _min?: GoogleDocsDataMinOrderByAggregateInput;
    _sum?: GoogleDocsDataSumOrderByAggregateInput;
  };

  export type GoogleDocsDataScalarWhereWithAggregatesInput = {
    AND?:
      | GoogleDocsDataScalarWhereWithAggregatesInput
      | GoogleDocsDataScalarWhereWithAggregatesInput[];
    OR?: GoogleDocsDataScalarWhereWithAggregatesInput[];
    NOT?:
      | GoogleDocsDataScalarWhereWithAggregatesInput
      | GoogleDocsDataScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"GoogleDocsData"> | string;
    userId?: StringWithAggregatesFilter<"GoogleDocsData"> | string;
    editsCount?:
      | IntNullableWithAggregatesFilter<"GoogleDocsData">
      | number
      | null;
    lastActivity?:
      | DateTimeNullableWithAggregatesFilter<"GoogleDocsData">
      | Date
      | string
      | null;
  };

  export type InsightWhereInput = {
    AND?: InsightWhereInput | InsightWhereInput[];
    OR?: InsightWhereInput[];
    NOT?: InsightWhereInput | InsightWhereInput[];
    id?: StringFilter<"Insight"> | string;
    projectId?: StringFilter<"Insight"> | string;
    generatedAt?: DateTimeFilter<"Insight"> | Date | string;
    type?: StringFilter<"Insight"> | string;
    summary?: StringFilter<"Insight"> | string;
    metrics?: JsonNullableFilter<"Insight">;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
  };

  export type InsightOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    generatedAt?: SortOrder;
    type?: SortOrder;
    summary?: SortOrder;
    metrics?: SortOrderInput | SortOrder;
    project?: ProjectOrderByWithRelationInput;
  };

  export type InsightWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InsightWhereInput | InsightWhereInput[];
      OR?: InsightWhereInput[];
      NOT?: InsightWhereInput | InsightWhereInput[];
      projectId?: StringFilter<"Insight"> | string;
      generatedAt?: DateTimeFilter<"Insight"> | Date | string;
      type?: StringFilter<"Insight"> | string;
      summary?: StringFilter<"Insight"> | string;
      metrics?: JsonNullableFilter<"Insight">;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    },
    "id"
  >;

  export type InsightOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    generatedAt?: SortOrder;
    type?: SortOrder;
    summary?: SortOrder;
    metrics?: SortOrderInput | SortOrder;
    _count?: InsightCountOrderByAggregateInput;
    _max?: InsightMaxOrderByAggregateInput;
    _min?: InsightMinOrderByAggregateInput;
  };

  export type InsightScalarWhereWithAggregatesInput = {
    AND?:
      | InsightScalarWhereWithAggregatesInput
      | InsightScalarWhereWithAggregatesInput[];
    OR?: InsightScalarWhereWithAggregatesInput[];
    NOT?:
      | InsightScalarWhereWithAggregatesInput
      | InsightScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Insight"> | string;
    projectId?: StringWithAggregatesFilter<"Insight"> | string;
    generatedAt?: DateTimeWithAggregatesFilter<"Insight"> | Date | string;
    type?: StringWithAggregatesFilter<"Insight"> | string;
    summary?: StringWithAggregatesFilter<"Insight"> | string;
    metrics?: JsonNullableWithAggregatesFilter<"Insight">;
  };

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[];
    OR?: FeedbackWhereInput[];
    NOT?: FeedbackWhereInput | FeedbackWhereInput[];
    id?: StringFilter<"Feedback"> | string;
    projectId?: StringFilter<"Feedback"> | string;
    fromUserId?: StringFilter<"Feedback"> | string;
    toUserId?: StringFilter<"Feedback"> | string;
    effort?: IntFilter<"Feedback"> | number;
    collaboration?: IntFilter<"Feedback"> | number;
    reliability?: IntFilter<"Feedback"> | number;
    comment?: StringNullableFilter<"Feedback"> | string | null;
    aiFlag?: StringNullableFilter<"Feedback"> | string | null;
    createdAt?: DateTimeFilter<"Feedback"> | Date | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    fromUserId?: SortOrder;
    toUserId?: SortOrder;
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    aiFlag?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
    fromUser?: UserOrderByWithRelationInput;
    toUser?: UserOrderByWithRelationInput;
  };

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: FeedbackWhereInput | FeedbackWhereInput[];
      OR?: FeedbackWhereInput[];
      NOT?: FeedbackWhereInput | FeedbackWhereInput[];
      projectId?: StringFilter<"Feedback"> | string;
      fromUserId?: StringFilter<"Feedback"> | string;
      toUserId?: StringFilter<"Feedback"> | string;
      effort?: IntFilter<"Feedback"> | number;
      collaboration?: IntFilter<"Feedback"> | number;
      reliability?: IntFilter<"Feedback"> | number;
      comment?: StringNullableFilter<"Feedback"> | string | null;
      aiFlag?: StringNullableFilter<"Feedback"> | string | null;
      createdAt?: DateTimeFilter<"Feedback"> | Date | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
      toUser?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    fromUserId?: SortOrder;
    toUserId?: SortOrder;
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    aiFlag?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: FeedbackCountOrderByAggregateInput;
    _avg?: FeedbackAvgOrderByAggregateInput;
    _max?: FeedbackMaxOrderByAggregateInput;
    _min?: FeedbackMinOrderByAggregateInput;
    _sum?: FeedbackSumOrderByAggregateInput;
  };

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?:
      | FeedbackScalarWhereWithAggregatesInput
      | FeedbackScalarWhereWithAggregatesInput[];
    OR?: FeedbackScalarWhereWithAggregatesInput[];
    NOT?:
      | FeedbackScalarWhereWithAggregatesInput
      | FeedbackScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Feedback"> | string;
    projectId?: StringWithAggregatesFilter<"Feedback"> | string;
    fromUserId?: StringWithAggregatesFilter<"Feedback"> | string;
    toUserId?: StringWithAggregatesFilter<"Feedback"> | string;
    effort?: IntWithAggregatesFilter<"Feedback"> | number;
    collaboration?: IntWithAggregatesFilter<"Feedback"> | number;
    reliability?: IntWithAggregatesFilter<"Feedback"> | number;
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null;
    aiFlag?: StringNullableWithAggregatesFilter<"Feedback"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string;
  };

  export type PresenceLogWhereInput = {
    AND?: PresenceLogWhereInput | PresenceLogWhereInput[];
    OR?: PresenceLogWhereInput[];
    NOT?: PresenceLogWhereInput | PresenceLogWhereInput[];
    id?: StringFilter<"PresenceLog"> | string;
    projectId?: StringFilter<"PresenceLog"> | string;
    userId?: StringFilter<"PresenceLog"> | string;
    status?: EnumPresenceStatusFilter<"PresenceLog"> | $Enums.PresenceStatus;
    sessionStart?: DateTimeFilter<"PresenceLog"> | Date | string;
    sessionEnd?: DateTimeNullableFilter<"PresenceLog"> | Date | string | null;
    duration?: IntNullableFilter<"PresenceLog"> | number | null;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PresenceLogOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    status?: SortOrder;
    sessionStart?: SortOrder;
    sessionEnd?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    project?: ProjectOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type PresenceLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PresenceLogWhereInput | PresenceLogWhereInput[];
      OR?: PresenceLogWhereInput[];
      NOT?: PresenceLogWhereInput | PresenceLogWhereInput[];
      projectId?: StringFilter<"PresenceLog"> | string;
      userId?: StringFilter<"PresenceLog"> | string;
      status?: EnumPresenceStatusFilter<"PresenceLog"> | $Enums.PresenceStatus;
      sessionStart?: DateTimeFilter<"PresenceLog"> | Date | string;
      sessionEnd?: DateTimeNullableFilter<"PresenceLog"> | Date | string | null;
      duration?: IntNullableFilter<"PresenceLog"> | number | null;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type PresenceLogOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    status?: SortOrder;
    sessionStart?: SortOrder;
    sessionEnd?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    _count?: PresenceLogCountOrderByAggregateInput;
    _avg?: PresenceLogAvgOrderByAggregateInput;
    _max?: PresenceLogMaxOrderByAggregateInput;
    _min?: PresenceLogMinOrderByAggregateInput;
    _sum?: PresenceLogSumOrderByAggregateInput;
  };

  export type PresenceLogScalarWhereWithAggregatesInput = {
    AND?:
      | PresenceLogScalarWhereWithAggregatesInput
      | PresenceLogScalarWhereWithAggregatesInput[];
    OR?: PresenceLogScalarWhereWithAggregatesInput[];
    NOT?:
      | PresenceLogScalarWhereWithAggregatesInput
      | PresenceLogScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PresenceLog"> | string;
    projectId?: StringWithAggregatesFilter<"PresenceLog"> | string;
    userId?: StringWithAggregatesFilter<"PresenceLog"> | string;
    status?:
      | EnumPresenceStatusWithAggregatesFilter<"PresenceLog">
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeWithAggregatesFilter<"PresenceLog"> | Date | string;
    sessionEnd?:
      | DateTimeNullableWithAggregatesFilter<"PresenceLog">
      | Date
      | string
      | null;
    duration?: IntNullableWithAggregatesFilter<"PresenceLog"> | number | null;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserOAuthCreateInput = {
    id?: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutOauthAccountsInput;
  };

  export type UserOAuthUncheckedCreateInput = {
    id?: string;
    userId: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserOAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput;
  };

  export type UserOAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserOAuthCreateManyInput = {
    id?: string;
    userId: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserOAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserOAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateInput = {
    id?: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
    user: UserCreateNestedOneWithoutRefreshTokensInput;
  };

  export type RefreshTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
  };

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
  };

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RefreshTokenCreateManyInput = {
    id?: string;
    userId: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
  };

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProjectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
  };

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberCreateInput = {
    id?: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
    user: UserCreateNestedOneWithoutMembershipsInput;
    project: ProjectCreateNestedOneWithoutMembersInput;
  };

  export type ProjectMemberUncheckedCreateInput = {
    id?: string;
    userId: string;
    projectId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput;
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberCreateManyInput = {
    id?: string;
    userId: string;
    projectId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TaskCreateInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
    project: ProjectCreateNestedOneWithoutTasksInput;
    assignee?: UserCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    projectId: string;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    assigneeId?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput;
    assignee?: UserUpdateOneWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type TaskCreateManyInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    projectId: string;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    assigneeId?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type ChatMessageCreateInput = {
    id?: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutChatMessagesInput;
    sender: UserCreateNestedOneWithoutMessagesInput;
  };

  export type ChatMessageUncheckedCreateInput = {
    id?: string;
    projectId: string;
    senderId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutChatMessagesNestedInput;
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChatMessageCreateManyInput = {
    id?: string;
    projectId: string;
    senderId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GitHubActivityCreateInput = {
    id?: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    project: ProjectCreateNestedOneWithoutGithubDataInput;
    user: UserCreateNestedOneWithoutGithubActivitiesInput;
  };

  export type GitHubActivityUncheckedCreateInput = {
    id?: string;
    projectId: string;
    userId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    project?: ProjectUpdateOneRequiredWithoutGithubDataNestedInput;
    user?: UserUpdateOneRequiredWithoutGithubActivitiesNestedInput;
  };

  export type GitHubActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityCreateManyInput = {
    id?: string;
    projectId: string;
    userId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GoogleDocsDataCreateInput = {
    id?: string;
    editsCount?: number | null;
    lastActivity?: Date | string | null;
    user: UserCreateNestedOneWithoutGoogleDocsDataInput;
  };

  export type GoogleDocsDataUncheckedCreateInput = {
    id?: string;
    userId: string;
    editsCount?: number | null;
    lastActivity?: Date | string | null;
  };

  export type GoogleDocsDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutGoogleDocsDataNestedInput;
  };

  export type GoogleDocsDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type GoogleDocsDataCreateManyInput = {
    id?: string;
    userId: string;
    editsCount?: number | null;
    lastActivity?: Date | string | null;
  };

  export type GoogleDocsDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type GoogleDocsDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type InsightCreateInput = {
    id?: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
    project: ProjectCreateNestedOneWithoutInsightsInput;
  };

  export type InsightUncheckedCreateInput = {
    id?: string;
    projectId: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
    project?: ProjectUpdateOneRequiredWithoutInsightsNestedInput;
  };

  export type InsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightCreateManyInput = {
    id?: string;
    projectId: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type FeedbackCreateInput = {
    id?: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutFeedbacksInput;
    fromUser: UserCreateNestedOneWithoutFeedbackGivenInput;
    toUser: UserCreateNestedOneWithoutFeedbackReceivedInput;
  };

  export type FeedbackUncheckedCreateInput = {
    id?: string;
    projectId: string;
    fromUserId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutFeedbacksNestedInput;
    fromUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput;
    toUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput;
  };

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackCreateManyInput = {
    id?: string;
    projectId: string;
    fromUserId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PresenceLogCreateInput = {
    id?: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
    project: ProjectCreateNestedOneWithoutPresenceLogsInput;
    user: UserCreateNestedOneWithoutPresenceLogsInput;
  };

  export type PresenceLogUncheckedCreateInput = {
    id?: string;
    projectId: string;
    userId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type PresenceLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    project?: ProjectUpdateOneRequiredWithoutPresenceLogsNestedInput;
    user?: UserUpdateOneRequiredWithoutPresenceLogsNestedInput;
  };

  export type PresenceLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PresenceLogCreateManyInput = {
    id?: string;
    projectId: string;
    userId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type PresenceLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PresenceLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserOAuthListRelationFilter = {
    every?: UserOAuthWhereInput;
    some?: UserOAuthWhereInput;
    none?: UserOAuthWhereInput;
  };

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput;
    some?: ProjectWhereInput;
    none?: ProjectWhereInput;
  };

  export type GoogleDocsDataNullableScalarRelationFilter = {
    is?: GoogleDocsDataWhereInput | null;
    isNot?: GoogleDocsDataWhereInput | null;
  };

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput;
    some?: ProjectMemberWhereInput;
    none?: ProjectMemberWhereInput;
  };

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput;
    some?: ChatMessageWhereInput;
    none?: ChatMessageWhereInput;
  };

  export type TaskListRelationFilter = {
    every?: TaskWhereInput;
    some?: TaskWhereInput;
    none?: TaskWhereInput;
  };

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput;
    some?: FeedbackWhereInput;
    none?: FeedbackWhereInput;
  };

  export type GitHubActivityListRelationFilter = {
    every?: GitHubActivityWhereInput;
    some?: GitHubActivityWhereInput;
    none?: GitHubActivityWhereInput;
  };

  export type PresenceLogListRelationFilter = {
    every?: PresenceLogWhereInput;
    some?: PresenceLogWhereInput;
    none?: PresenceLogWhereInput;
  };

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput;
    some?: RefreshTokenWhereInput;
    none?: RefreshTokenWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserOAuthOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type GitHubActivityOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PresenceLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
    oauthProvider?: SortOrder;
    oauthId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
    oauthProvider?: SortOrder;
    oauthId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
    oauthProvider?: SortOrder;
    oauthId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type UserOAuthProviderProviderUserIdCompoundUniqueInput = {
    provider: string;
    providerUserId: string;
  };

  export type UserOAuthCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    provider?: SortOrder;
    providerUserId?: SortOrder;
    accessTokenEnc?: SortOrder;
    tokenExpiresAt?: SortOrder;
    scopes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserOAuthMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    provider?: SortOrder;
    providerUserId?: SortOrder;
    accessTokenEnc?: SortOrder;
    tokenExpiresAt?: SortOrder;
    scopes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserOAuthMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    provider?: SortOrder;
    providerUserId?: SortOrder;
    accessTokenEnc?: SortOrder;
    tokenExpiresAt?: SortOrder;
    scopes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    hashedToken?: SortOrder;
    expiresAt?: SortOrder;
    revokedAt?: SortOrder;
    replacedByToken?: SortOrder;
    createdAt?: SortOrder;
    lastUsedAt?: SortOrder;
    userAgent?: SortOrder;
    ipAddress?: SortOrder;
    location?: SortOrder;
    deviceName?: SortOrder;
  };

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    hashedToken?: SortOrder;
    expiresAt?: SortOrder;
    revokedAt?: SortOrder;
    replacedByToken?: SortOrder;
    createdAt?: SortOrder;
    lastUsedAt?: SortOrder;
    userAgent?: SortOrder;
    ipAddress?: SortOrder;
    location?: SortOrder;
    deviceName?: SortOrder;
  };

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    hashedToken?: SortOrder;
    expiresAt?: SortOrder;
    revokedAt?: SortOrder;
    replacedByToken?: SortOrder;
    createdAt?: SortOrder;
    lastUsedAt?: SortOrder;
    userAgent?: SortOrder;
    ipAddress?: SortOrder;
    location?: SortOrder;
    deviceName?: SortOrder;
  };

  export type InsightListRelationFilter = {
    every?: InsightWhereInput;
    some?: InsightWhereInput;
    none?: InsightWhereInput;
  };

  export type InsightOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    githubRepo?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    lastActive?: SortOrder;
  };

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    githubRepo?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    lastActive?: SortOrder;
  };

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    githubRepo?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    lastActive?: SortOrder;
  };

  export type EnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProjectRole[]
      | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole;
  };

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus;
  };

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput;
    isNot?: ProjectWhereInput;
  };

  export type ProjectMemberUserIdProjectIdCompoundUniqueInput = {
    userId: string;
    projectId: string;
  };

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectId?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectId?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectId?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    joinedAt?: SortOrder;
  };

  export type EnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProjectRole[]
      | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.ProjectRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>;
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>;
  };

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MemberStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>;
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>;
  };

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder;
    priority?: SortOrder;
    projectId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    weight?: SortOrder;
    status?: SortOrder;
    assigneeId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    score?: SortOrder;
  };

  export type TaskAvgOrderByAggregateInput = {
    weight?: SortOrder;
    score?: SortOrder;
  };

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder;
    priority?: SortOrder;
    projectId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    weight?: SortOrder;
    status?: SortOrder;
    assigneeId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    score?: SortOrder;
  };

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder;
    priority?: SortOrder;
    projectId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    weight?: SortOrder;
    status?: SortOrder;
    assigneeId?: SortOrder;
    createdAt?: SortOrder;
    completedAt?: SortOrder;
    score?: SortOrder;
  };

  export type TaskSumOrderByAggregateInput = {
    weight?: SortOrder;
    score?: SortOrder;
  };

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel>
      | $Enums.TaskPriority;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>;
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TaskStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>;
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    senderId?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    aiLabel?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    senderId?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    aiLabel?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    senderId?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    aiLabel?: SortOrder;
    createdAt?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type GitHubActivityProjectIdUserIdWeekStartCompoundUniqueInput = {
    projectId: string;
    userId: string;
    weekStart: Date | string;
  };

  export type GitHubActivityCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
    weekStart?: SortOrder;
    commitDetails?: SortOrder;
  };

  export type GitHubActivityAvgOrderByAggregateInput = {
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
  };

  export type GitHubActivityMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
    weekStart?: SortOrder;
  };

  export type GitHubActivityMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
    weekStart?: SortOrder;
  };

  export type GitHubActivitySumOrderByAggregateInput = {
    commitCount?: SortOrder;
    prCount?: SortOrder;
    linesAdded?: SortOrder;
    linesDeleted?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type GoogleDocsDataCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    editsCount?: SortOrder;
    lastActivity?: SortOrder;
  };

  export type GoogleDocsDataAvgOrderByAggregateInput = {
    editsCount?: SortOrder;
  };

  export type GoogleDocsDataMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    editsCount?: SortOrder;
    lastActivity?: SortOrder;
  };

  export type GoogleDocsDataMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    editsCount?: SortOrder;
    lastActivity?: SortOrder;
  };

  export type GoogleDocsDataSumOrderByAggregateInput = {
    editsCount?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type InsightCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    generatedAt?: SortOrder;
    type?: SortOrder;
    summary?: SortOrder;
    metrics?: SortOrder;
  };

  export type InsightMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    generatedAt?: SortOrder;
    type?: SortOrder;
    summary?: SortOrder;
  };

  export type InsightMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    generatedAt?: SortOrder;
    type?: SortOrder;
    summary?: SortOrder;
  };

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    fromUserId?: SortOrder;
    toUserId?: SortOrder;
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
    comment?: SortOrder;
    aiFlag?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FeedbackAvgOrderByAggregateInput = {
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
  };

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    fromUserId?: SortOrder;
    toUserId?: SortOrder;
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
    comment?: SortOrder;
    aiFlag?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    fromUserId?: SortOrder;
    toUserId?: SortOrder;
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
    comment?: SortOrder;
    aiFlag?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FeedbackSumOrderByAggregateInput = {
    effort?: SortOrder;
    collaboration?: SortOrder;
    reliability?: SortOrder;
  };

  export type EnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PresenceStatus
      | EnumPresenceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus;
  };

  export type PresenceLogCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    status?: SortOrder;
    sessionStart?: SortOrder;
    sessionEnd?: SortOrder;
    duration?: SortOrder;
  };

  export type PresenceLogAvgOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type PresenceLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    status?: SortOrder;
    sessionStart?: SortOrder;
    sessionEnd?: SortOrder;
    duration?: SortOrder;
  };

  export type PresenceLogMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    status?: SortOrder;
    sessionStart?: SortOrder;
    sessionEnd?: SortOrder;
    duration?: SortOrder;
  };

  export type PresenceLogSumOrderByAggregateInput = {
    duration?: SortOrder;
  };

  export type EnumPresenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PresenceStatus
      | EnumPresenceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PresenceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>;
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>;
  };

  export type UserOAuthCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserOAuthCreateWithoutUserInput,
          UserOAuthUncheckedCreateWithoutUserInput
        >
      | UserOAuthCreateWithoutUserInput[]
      | UserOAuthUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserOAuthCreateOrConnectWithoutUserInput
      | UserOAuthCreateOrConnectWithoutUserInput[];
    createMany?: UserOAuthCreateManyUserInputEnvelope;
    connect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
  };

  export type ProjectCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ProjectCreateWithoutCreatedByInput,
          ProjectUncheckedCreateWithoutCreatedByInput
        >
      | ProjectCreateWithoutCreatedByInput[]
      | ProjectUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutCreatedByInput
      | ProjectCreateOrConnectWithoutCreatedByInput[];
    createMany?: ProjectCreateManyCreatedByInputEnvelope;
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
  };

  export type GoogleDocsDataCreateNestedOneWithoutUserInput = {
    create?: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: GoogleDocsDataCreateOrConnectWithoutUserInput;
    connect?: GoogleDocsDataWhereUniqueInput;
  };

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutUserInput,
          ProjectMemberUncheckedCreateWithoutUserInput
        >
      | ProjectMemberCreateWithoutUserInput[]
      | ProjectMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutUserInput
      | ProjectMemberCreateOrConnectWithoutUserInput[];
    createMany?: ProjectMemberCreateManyUserInputEnvelope;
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
  };

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutSenderInput,
          ChatMessageUncheckedCreateWithoutSenderInput
        >
      | ChatMessageCreateWithoutSenderInput[]
      | ChatMessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutSenderInput
      | ChatMessageCreateOrConnectWithoutSenderInput[];
    createMany?: ChatMessageCreateManySenderInputEnvelope;
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
  };

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?:
      | XOR<
          TaskCreateWithoutAssigneeInput,
          TaskUncheckedCreateWithoutAssigneeInput
        >
      | TaskCreateWithoutAssigneeInput[]
      | TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutAssigneeInput
      | TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: TaskCreateManyAssigneeInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type FeedbackCreateNestedManyWithoutFromUserInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutFromUserInput,
          FeedbackUncheckedCreateWithoutFromUserInput
        >
      | FeedbackCreateWithoutFromUserInput[]
      | FeedbackUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutFromUserInput
      | FeedbackCreateOrConnectWithoutFromUserInput[];
    createMany?: FeedbackCreateManyFromUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type FeedbackCreateNestedManyWithoutToUserInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutToUserInput,
          FeedbackUncheckedCreateWithoutToUserInput
        >
      | FeedbackCreateWithoutToUserInput[]
      | FeedbackUncheckedCreateWithoutToUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutToUserInput
      | FeedbackCreateOrConnectWithoutToUserInput[];
    createMany?: FeedbackCreateManyToUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type GitHubActivityCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutUserInput,
          GitHubActivityUncheckedCreateWithoutUserInput
        >
      | GitHubActivityCreateWithoutUserInput[]
      | GitHubActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutUserInput
      | GitHubActivityCreateOrConnectWithoutUserInput[];
    createMany?: GitHubActivityCreateManyUserInputEnvelope;
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
  };

  export type PresenceLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutUserInput,
          PresenceLogUncheckedCreateWithoutUserInput
        >
      | PresenceLogCreateWithoutUserInput[]
      | PresenceLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutUserInput
      | PresenceLogCreateOrConnectWithoutUserInput[];
    createMany?: PresenceLogCreateManyUserInputEnvelope;
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
  };

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type UserOAuthUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserOAuthCreateWithoutUserInput,
          UserOAuthUncheckedCreateWithoutUserInput
        >
      | UserOAuthCreateWithoutUserInput[]
      | UserOAuthUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserOAuthCreateOrConnectWithoutUserInput
      | UserOAuthCreateOrConnectWithoutUserInput[];
    createMany?: UserOAuthCreateManyUserInputEnvelope;
    connect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
  };

  export type ProjectUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ProjectCreateWithoutCreatedByInput,
          ProjectUncheckedCreateWithoutCreatedByInput
        >
      | ProjectCreateWithoutCreatedByInput[]
      | ProjectUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutCreatedByInput
      | ProjectCreateOrConnectWithoutCreatedByInput[];
    createMany?: ProjectCreateManyCreatedByInputEnvelope;
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
  };

  export type GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: GoogleDocsDataCreateOrConnectWithoutUserInput;
    connect?: GoogleDocsDataWhereUniqueInput;
  };

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutUserInput,
          ProjectMemberUncheckedCreateWithoutUserInput
        >
      | ProjectMemberCreateWithoutUserInput[]
      | ProjectMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutUserInput
      | ProjectMemberCreateOrConnectWithoutUserInput[];
    createMany?: ProjectMemberCreateManyUserInputEnvelope;
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
  };

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutSenderInput,
          ChatMessageUncheckedCreateWithoutSenderInput
        >
      | ChatMessageCreateWithoutSenderInput[]
      | ChatMessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutSenderInput
      | ChatMessageCreateOrConnectWithoutSenderInput[];
    createMany?: ChatMessageCreateManySenderInputEnvelope;
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
  };

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?:
      | XOR<
          TaskCreateWithoutAssigneeInput,
          TaskUncheckedCreateWithoutAssigneeInput
        >
      | TaskCreateWithoutAssigneeInput[]
      | TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutAssigneeInput
      | TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: TaskCreateManyAssigneeInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type FeedbackUncheckedCreateNestedManyWithoutFromUserInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutFromUserInput,
          FeedbackUncheckedCreateWithoutFromUserInput
        >
      | FeedbackCreateWithoutFromUserInput[]
      | FeedbackUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutFromUserInput
      | FeedbackCreateOrConnectWithoutFromUserInput[];
    createMany?: FeedbackCreateManyFromUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type FeedbackUncheckedCreateNestedManyWithoutToUserInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutToUserInput,
          FeedbackUncheckedCreateWithoutToUserInput
        >
      | FeedbackCreateWithoutToUserInput[]
      | FeedbackUncheckedCreateWithoutToUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutToUserInput
      | FeedbackCreateOrConnectWithoutToUserInput[];
    createMany?: FeedbackCreateManyToUserInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type GitHubActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutUserInput,
          GitHubActivityUncheckedCreateWithoutUserInput
        >
      | GitHubActivityCreateWithoutUserInput[]
      | GitHubActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutUserInput
      | GitHubActivityCreateOrConnectWithoutUserInput[];
    createMany?: GitHubActivityCreateManyUserInputEnvelope;
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
  };

  export type PresenceLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutUserInput,
          PresenceLogUncheckedCreateWithoutUserInput
        >
      | PresenceLogCreateWithoutUserInput[]
      | PresenceLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutUserInput
      | PresenceLogCreateOrConnectWithoutUserInput[];
    createMany?: PresenceLogCreateManyUserInputEnvelope;
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
  };

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserOAuthUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserOAuthCreateWithoutUserInput,
          UserOAuthUncheckedCreateWithoutUserInput
        >
      | UserOAuthCreateWithoutUserInput[]
      | UserOAuthUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserOAuthCreateOrConnectWithoutUserInput
      | UserOAuthCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserOAuthUpsertWithWhereUniqueWithoutUserInput
      | UserOAuthUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserOAuthCreateManyUserInputEnvelope;
    set?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    disconnect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    delete?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    connect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    update?:
      | UserOAuthUpdateWithWhereUniqueWithoutUserInput
      | UserOAuthUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserOAuthUpdateManyWithWhereWithoutUserInput
      | UserOAuthUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserOAuthScalarWhereInput | UserOAuthScalarWhereInput[];
  };

  export type ProjectUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ProjectCreateWithoutCreatedByInput,
          ProjectUncheckedCreateWithoutCreatedByInput
        >
      | ProjectCreateWithoutCreatedByInput[]
      | ProjectUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutCreatedByInput
      | ProjectCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutCreatedByInput
      | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ProjectCreateManyCreatedByInputEnvelope;
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    update?:
      | ProjectUpdateWithWhereUniqueWithoutCreatedByInput
      | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutCreatedByInput
      | ProjectUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
  };

  export type GoogleDocsDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: GoogleDocsDataCreateOrConnectWithoutUserInput;
    upsert?: GoogleDocsDataUpsertWithoutUserInput;
    disconnect?: GoogleDocsDataWhereInput | boolean;
    delete?: GoogleDocsDataWhereInput | boolean;
    connect?: GoogleDocsDataWhereUniqueInput;
    update?: XOR<
      XOR<
        GoogleDocsDataUpdateToOneWithWhereWithoutUserInput,
        GoogleDocsDataUpdateWithoutUserInput
      >,
      GoogleDocsDataUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutUserInput,
          ProjectMemberUncheckedCreateWithoutUserInput
        >
      | ProjectMemberCreateWithoutUserInput[]
      | ProjectMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutUserInput
      | ProjectMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectMemberUpsertWithWhereUniqueWithoutUserInput
      | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectMemberCreateManyUserInputEnvelope;
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    disconnect?:
      | ProjectMemberWhereUniqueInput
      | ProjectMemberWhereUniqueInput[];
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    update?:
      | ProjectMemberUpdateWithWhereUniqueWithoutUserInput
      | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectMemberUpdateManyWithWhereWithoutUserInput
      | ProjectMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProjectMemberScalarWhereInput
      | ProjectMemberScalarWhereInput[];
  };

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutSenderInput,
          ChatMessageUncheckedCreateWithoutSenderInput
        >
      | ChatMessageCreateWithoutSenderInput[]
      | ChatMessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutSenderInput
      | ChatMessageCreateOrConnectWithoutSenderInput[];
    upsert?:
      | ChatMessageUpsertWithWhereUniqueWithoutSenderInput
      | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: ChatMessageCreateManySenderInputEnvelope;
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    update?:
      | ChatMessageUpdateWithWhereUniqueWithoutSenderInput
      | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | ChatMessageUpdateManyWithWhereWithoutSenderInput
      | ChatMessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
  };

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutAssigneeInput,
          TaskUncheckedCreateWithoutAssigneeInput
        >
      | TaskCreateWithoutAssigneeInput[]
      | TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutAssigneeInput
      | TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutAssigneeInput
      | TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: TaskCreateManyAssigneeInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutAssigneeInput
      | TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutAssigneeInput
      | TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type FeedbackUpdateManyWithoutFromUserNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutFromUserInput,
          FeedbackUncheckedCreateWithoutFromUserInput
        >
      | FeedbackCreateWithoutFromUserInput[]
      | FeedbackUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutFromUserInput
      | FeedbackCreateOrConnectWithoutFromUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutFromUserInput
      | FeedbackUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: FeedbackCreateManyFromUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutFromUserInput
      | FeedbackUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutFromUserInput
      | FeedbackUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type FeedbackUpdateManyWithoutToUserNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutToUserInput,
          FeedbackUncheckedCreateWithoutToUserInput
        >
      | FeedbackCreateWithoutToUserInput[]
      | FeedbackUncheckedCreateWithoutToUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutToUserInput
      | FeedbackCreateOrConnectWithoutToUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutToUserInput
      | FeedbackUpsertWithWhereUniqueWithoutToUserInput[];
    createMany?: FeedbackCreateManyToUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutToUserInput
      | FeedbackUpdateWithWhereUniqueWithoutToUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutToUserInput
      | FeedbackUpdateManyWithWhereWithoutToUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type GitHubActivityUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutUserInput,
          GitHubActivityUncheckedCreateWithoutUserInput
        >
      | GitHubActivityCreateWithoutUserInput[]
      | GitHubActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutUserInput
      | GitHubActivityCreateOrConnectWithoutUserInput[];
    upsert?:
      | GitHubActivityUpsertWithWhereUniqueWithoutUserInput
      | GitHubActivityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GitHubActivityCreateManyUserInputEnvelope;
    set?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    disconnect?:
      | GitHubActivityWhereUniqueInput
      | GitHubActivityWhereUniqueInput[];
    delete?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    update?:
      | GitHubActivityUpdateWithWhereUniqueWithoutUserInput
      | GitHubActivityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GitHubActivityUpdateManyWithWhereWithoutUserInput
      | GitHubActivityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | GitHubActivityScalarWhereInput
      | GitHubActivityScalarWhereInput[];
  };

  export type PresenceLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutUserInput,
          PresenceLogUncheckedCreateWithoutUserInput
        >
      | PresenceLogCreateWithoutUserInput[]
      | PresenceLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutUserInput
      | PresenceLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | PresenceLogUpsertWithWhereUniqueWithoutUserInput
      | PresenceLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PresenceLogCreateManyUserInputEnvelope;
    set?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    disconnect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    delete?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    update?:
      | PresenceLogUpdateWithWhereUniqueWithoutUserInput
      | PresenceLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PresenceLogUpdateManyWithWhereWithoutUserInput
      | PresenceLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
  };

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type UserOAuthUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserOAuthCreateWithoutUserInput,
          UserOAuthUncheckedCreateWithoutUserInput
        >
      | UserOAuthCreateWithoutUserInput[]
      | UserOAuthUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | UserOAuthCreateOrConnectWithoutUserInput
      | UserOAuthCreateOrConnectWithoutUserInput[];
    upsert?:
      | UserOAuthUpsertWithWhereUniqueWithoutUserInput
      | UserOAuthUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: UserOAuthCreateManyUserInputEnvelope;
    set?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    disconnect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    delete?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    connect?: UserOAuthWhereUniqueInput | UserOAuthWhereUniqueInput[];
    update?:
      | UserOAuthUpdateWithWhereUniqueWithoutUserInput
      | UserOAuthUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | UserOAuthUpdateManyWithWhereWithoutUserInput
      | UserOAuthUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: UserOAuthScalarWhereInput | UserOAuthScalarWhereInput[];
  };

  export type ProjectUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ProjectCreateWithoutCreatedByInput,
          ProjectUncheckedCreateWithoutCreatedByInput
        >
      | ProjectCreateWithoutCreatedByInput[]
      | ProjectUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutCreatedByInput
      | ProjectCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutCreatedByInput
      | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ProjectCreateManyCreatedByInputEnvelope;
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    update?:
      | ProjectUpdateWithWhereUniqueWithoutCreatedByInput
      | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutCreatedByInput
      | ProjectUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
  };

  export type GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: GoogleDocsDataCreateOrConnectWithoutUserInput;
    upsert?: GoogleDocsDataUpsertWithoutUserInput;
    disconnect?: GoogleDocsDataWhereInput | boolean;
    delete?: GoogleDocsDataWhereInput | boolean;
    connect?: GoogleDocsDataWhereUniqueInput;
    update?: XOR<
      XOR<
        GoogleDocsDataUpdateToOneWithWhereWithoutUserInput,
        GoogleDocsDataUpdateWithoutUserInput
      >,
      GoogleDocsDataUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutUserInput,
          ProjectMemberUncheckedCreateWithoutUserInput
        >
      | ProjectMemberCreateWithoutUserInput[]
      | ProjectMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutUserInput
      | ProjectMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectMemberUpsertWithWhereUniqueWithoutUserInput
      | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectMemberCreateManyUserInputEnvelope;
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    disconnect?:
      | ProjectMemberWhereUniqueInput
      | ProjectMemberWhereUniqueInput[];
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    update?:
      | ProjectMemberUpdateWithWhereUniqueWithoutUserInput
      | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectMemberUpdateManyWithWhereWithoutUserInput
      | ProjectMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProjectMemberScalarWhereInput
      | ProjectMemberScalarWhereInput[];
  };

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutSenderInput,
          ChatMessageUncheckedCreateWithoutSenderInput
        >
      | ChatMessageCreateWithoutSenderInput[]
      | ChatMessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutSenderInput
      | ChatMessageCreateOrConnectWithoutSenderInput[];
    upsert?:
      | ChatMessageUpsertWithWhereUniqueWithoutSenderInput
      | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: ChatMessageCreateManySenderInputEnvelope;
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    update?:
      | ChatMessageUpdateWithWhereUniqueWithoutSenderInput
      | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?:
      | ChatMessageUpdateManyWithWhereWithoutSenderInput
      | ChatMessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
  };

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutAssigneeInput,
          TaskUncheckedCreateWithoutAssigneeInput
        >
      | TaskCreateWithoutAssigneeInput[]
      | TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutAssigneeInput
      | TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutAssigneeInput
      | TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: TaskCreateManyAssigneeInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutAssigneeInput
      | TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutAssigneeInput
      | TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type FeedbackUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutFromUserInput,
          FeedbackUncheckedCreateWithoutFromUserInput
        >
      | FeedbackCreateWithoutFromUserInput[]
      | FeedbackUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutFromUserInput
      | FeedbackCreateOrConnectWithoutFromUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutFromUserInput
      | FeedbackUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: FeedbackCreateManyFromUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutFromUserInput
      | FeedbackUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutFromUserInput
      | FeedbackUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type FeedbackUncheckedUpdateManyWithoutToUserNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutToUserInput,
          FeedbackUncheckedCreateWithoutToUserInput
        >
      | FeedbackCreateWithoutToUserInput[]
      | FeedbackUncheckedCreateWithoutToUserInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutToUserInput
      | FeedbackCreateOrConnectWithoutToUserInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutToUserInput
      | FeedbackUpsertWithWhereUniqueWithoutToUserInput[];
    createMany?: FeedbackCreateManyToUserInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutToUserInput
      | FeedbackUpdateWithWhereUniqueWithoutToUserInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutToUserInput
      | FeedbackUpdateManyWithWhereWithoutToUserInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type GitHubActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutUserInput,
          GitHubActivityUncheckedCreateWithoutUserInput
        >
      | GitHubActivityCreateWithoutUserInput[]
      | GitHubActivityUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutUserInput
      | GitHubActivityCreateOrConnectWithoutUserInput[];
    upsert?:
      | GitHubActivityUpsertWithWhereUniqueWithoutUserInput
      | GitHubActivityUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GitHubActivityCreateManyUserInputEnvelope;
    set?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    disconnect?:
      | GitHubActivityWhereUniqueInput
      | GitHubActivityWhereUniqueInput[];
    delete?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    update?:
      | GitHubActivityUpdateWithWhereUniqueWithoutUserInput
      | GitHubActivityUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GitHubActivityUpdateManyWithWhereWithoutUserInput
      | GitHubActivityUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | GitHubActivityScalarWhereInput
      | GitHubActivityScalarWhereInput[];
  };

  export type PresenceLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutUserInput,
          PresenceLogUncheckedCreateWithoutUserInput
        >
      | PresenceLogCreateWithoutUserInput[]
      | PresenceLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutUserInput
      | PresenceLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | PresenceLogUpsertWithWhereUniqueWithoutUserInput
      | PresenceLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PresenceLogCreateManyUserInputEnvelope;
    set?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    disconnect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    delete?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    update?:
      | PresenceLogUpdateWithWhereUniqueWithoutUserInput
      | PresenceLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PresenceLogUpdateManyWithWhereWithoutUserInput
      | PresenceLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<
      UserCreateWithoutOauthAccountsInput,
      UserUncheckedCreateWithoutOauthAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutOauthAccountsInput,
      UserUncheckedCreateWithoutOauthAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput;
    upsert?: UserUpsertWithoutOauthAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutOauthAccountsInput,
        UserUpdateWithoutOauthAccountsInput
      >,
      UserUncheckedUpdateWithoutOauthAccountsInput
    >;
  };

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: UserUpsertWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRefreshTokensInput,
        UserUpdateWithoutRefreshTokensInput
      >,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutProjectInput,
          ProjectMemberUncheckedCreateWithoutProjectInput
        >
      | ProjectMemberCreateWithoutProjectInput[]
      | ProjectMemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutProjectInput
      | ProjectMemberCreateOrConnectWithoutProjectInput[];
    createMany?: ProjectMemberCreateManyProjectInputEnvelope;
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
  };

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          TaskCreateWithoutProjectInput,
          TaskUncheckedCreateWithoutProjectInput
        >
      | TaskCreateWithoutProjectInput[]
      | TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutProjectInput
      | TaskCreateOrConnectWithoutProjectInput[];
    createMany?: TaskCreateManyProjectInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type ChatMessageCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutProjectInput,
          ChatMessageUncheckedCreateWithoutProjectInput
        >
      | ChatMessageCreateWithoutProjectInput[]
      | ChatMessageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutProjectInput
      | ChatMessageCreateOrConnectWithoutProjectInput[];
    createMany?: ChatMessageCreateManyProjectInputEnvelope;
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
  };

  export type FeedbackCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutProjectInput,
          FeedbackUncheckedCreateWithoutProjectInput
        >
      | FeedbackCreateWithoutProjectInput[]
      | FeedbackUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutProjectInput
      | FeedbackCreateOrConnectWithoutProjectInput[];
    createMany?: FeedbackCreateManyProjectInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type GitHubActivityCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutProjectInput,
          GitHubActivityUncheckedCreateWithoutProjectInput
        >
      | GitHubActivityCreateWithoutProjectInput[]
      | GitHubActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutProjectInput
      | GitHubActivityCreateOrConnectWithoutProjectInput[];
    createMany?: GitHubActivityCreateManyProjectInputEnvelope;
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
  };

  export type InsightCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          InsightCreateWithoutProjectInput,
          InsightUncheckedCreateWithoutProjectInput
        >
      | InsightCreateWithoutProjectInput[]
      | InsightUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | InsightCreateOrConnectWithoutProjectInput
      | InsightCreateOrConnectWithoutProjectInput[];
    createMany?: InsightCreateManyProjectInputEnvelope;
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
  };

  export type PresenceLogCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutProjectInput,
          PresenceLogUncheckedCreateWithoutProjectInput
        >
      | PresenceLogCreateWithoutProjectInput[]
      | PresenceLogUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutProjectInput
      | PresenceLogCreateOrConnectWithoutProjectInput[];
    createMany?: PresenceLogCreateManyProjectInputEnvelope;
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutProjectsCreatedInput = {
    create?: XOR<
      UserCreateWithoutProjectsCreatedInput,
      UserUncheckedCreateWithoutProjectsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsCreatedInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutProjectInput,
          ProjectMemberUncheckedCreateWithoutProjectInput
        >
      | ProjectMemberCreateWithoutProjectInput[]
      | ProjectMemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutProjectInput
      | ProjectMemberCreateOrConnectWithoutProjectInput[];
    createMany?: ProjectMemberCreateManyProjectInputEnvelope;
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
  };

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          TaskCreateWithoutProjectInput,
          TaskUncheckedCreateWithoutProjectInput
        >
      | TaskCreateWithoutProjectInput[]
      | TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutProjectInput
      | TaskCreateOrConnectWithoutProjectInput[];
    createMany?: TaskCreateManyProjectInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type ChatMessageUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutProjectInput,
          ChatMessageUncheckedCreateWithoutProjectInput
        >
      | ChatMessageCreateWithoutProjectInput[]
      | ChatMessageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutProjectInput
      | ChatMessageCreateOrConnectWithoutProjectInput[];
    createMany?: ChatMessageCreateManyProjectInputEnvelope;
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
  };

  export type FeedbackUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutProjectInput,
          FeedbackUncheckedCreateWithoutProjectInput
        >
      | FeedbackCreateWithoutProjectInput[]
      | FeedbackUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutProjectInput
      | FeedbackCreateOrConnectWithoutProjectInput[];
    createMany?: FeedbackCreateManyProjectInputEnvelope;
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
  };

  export type GitHubActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutProjectInput,
          GitHubActivityUncheckedCreateWithoutProjectInput
        >
      | GitHubActivityCreateWithoutProjectInput[]
      | GitHubActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutProjectInput
      | GitHubActivityCreateOrConnectWithoutProjectInput[];
    createMany?: GitHubActivityCreateManyProjectInputEnvelope;
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
  };

  export type InsightUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          InsightCreateWithoutProjectInput,
          InsightUncheckedCreateWithoutProjectInput
        >
      | InsightCreateWithoutProjectInput[]
      | InsightUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | InsightCreateOrConnectWithoutProjectInput
      | InsightCreateOrConnectWithoutProjectInput[];
    createMany?: InsightCreateManyProjectInputEnvelope;
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
  };

  export type PresenceLogUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutProjectInput,
          PresenceLogUncheckedCreateWithoutProjectInput
        >
      | PresenceLogCreateWithoutProjectInput[]
      | PresenceLogUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutProjectInput
      | PresenceLogCreateOrConnectWithoutProjectInput[];
    createMany?: PresenceLogCreateManyProjectInputEnvelope;
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
  };

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutProjectInput,
          ProjectMemberUncheckedCreateWithoutProjectInput
        >
      | ProjectMemberCreateWithoutProjectInput[]
      | ProjectMemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutProjectInput
      | ProjectMemberCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput
      | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ProjectMemberCreateManyProjectInputEnvelope;
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    disconnect?:
      | ProjectMemberWhereUniqueInput
      | ProjectMemberWhereUniqueInput[];
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    update?:
      | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput
      | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ProjectMemberUpdateManyWithWhereWithoutProjectInput
      | ProjectMemberUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ProjectMemberScalarWhereInput
      | ProjectMemberScalarWhereInput[];
  };

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutProjectInput,
          TaskUncheckedCreateWithoutProjectInput
        >
      | TaskCreateWithoutProjectInput[]
      | TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutProjectInput
      | TaskCreateOrConnectWithoutProjectInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutProjectInput
      | TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: TaskCreateManyProjectInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutProjectInput
      | TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutProjectInput
      | TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type ChatMessageUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutProjectInput,
          ChatMessageUncheckedCreateWithoutProjectInput
        >
      | ChatMessageCreateWithoutProjectInput[]
      | ChatMessageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutProjectInput
      | ChatMessageCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ChatMessageUpsertWithWhereUniqueWithoutProjectInput
      | ChatMessageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ChatMessageCreateManyProjectInputEnvelope;
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    update?:
      | ChatMessageUpdateWithWhereUniqueWithoutProjectInput
      | ChatMessageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ChatMessageUpdateManyWithWhereWithoutProjectInput
      | ChatMessageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
  };

  export type FeedbackUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutProjectInput,
          FeedbackUncheckedCreateWithoutProjectInput
        >
      | FeedbackCreateWithoutProjectInput[]
      | FeedbackUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutProjectInput
      | FeedbackCreateOrConnectWithoutProjectInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutProjectInput
      | FeedbackUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: FeedbackCreateManyProjectInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutProjectInput
      | FeedbackUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutProjectInput
      | FeedbackUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type GitHubActivityUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutProjectInput,
          GitHubActivityUncheckedCreateWithoutProjectInput
        >
      | GitHubActivityCreateWithoutProjectInput[]
      | GitHubActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutProjectInput
      | GitHubActivityCreateOrConnectWithoutProjectInput[];
    upsert?:
      | GitHubActivityUpsertWithWhereUniqueWithoutProjectInput
      | GitHubActivityUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: GitHubActivityCreateManyProjectInputEnvelope;
    set?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    disconnect?:
      | GitHubActivityWhereUniqueInput
      | GitHubActivityWhereUniqueInput[];
    delete?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    update?:
      | GitHubActivityUpdateWithWhereUniqueWithoutProjectInput
      | GitHubActivityUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | GitHubActivityUpdateManyWithWhereWithoutProjectInput
      | GitHubActivityUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | GitHubActivityScalarWhereInput
      | GitHubActivityScalarWhereInput[];
  };

  export type InsightUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          InsightCreateWithoutProjectInput,
          InsightUncheckedCreateWithoutProjectInput
        >
      | InsightCreateWithoutProjectInput[]
      | InsightUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | InsightCreateOrConnectWithoutProjectInput
      | InsightCreateOrConnectWithoutProjectInput[];
    upsert?:
      | InsightUpsertWithWhereUniqueWithoutProjectInput
      | InsightUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: InsightCreateManyProjectInputEnvelope;
    set?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    disconnect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    delete?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    update?:
      | InsightUpdateWithWhereUniqueWithoutProjectInput
      | InsightUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | InsightUpdateManyWithWhereWithoutProjectInput
      | InsightUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: InsightScalarWhereInput | InsightScalarWhereInput[];
  };

  export type PresenceLogUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutProjectInput,
          PresenceLogUncheckedCreateWithoutProjectInput
        >
      | PresenceLogCreateWithoutProjectInput[]
      | PresenceLogUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutProjectInput
      | PresenceLogCreateOrConnectWithoutProjectInput[];
    upsert?:
      | PresenceLogUpsertWithWhereUniqueWithoutProjectInput
      | PresenceLogUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: PresenceLogCreateManyProjectInputEnvelope;
    set?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    disconnect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    delete?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    update?:
      | PresenceLogUpdateWithWhereUniqueWithoutProjectInput
      | PresenceLogUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | PresenceLogUpdateManyWithWhereWithoutProjectInput
      | PresenceLogUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutProjectsCreatedNestedInput = {
    create?: XOR<
      UserCreateWithoutProjectsCreatedInput,
      UserUncheckedCreateWithoutProjectsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsCreatedInput;
    upsert?: UserUpsertWithoutProjectsCreatedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProjectsCreatedInput,
        UserUpdateWithoutProjectsCreatedInput
      >,
      UserUncheckedUpdateWithoutProjectsCreatedInput
    >;
  };

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectMemberCreateWithoutProjectInput,
          ProjectMemberUncheckedCreateWithoutProjectInput
        >
      | ProjectMemberCreateWithoutProjectInput[]
      | ProjectMemberUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectMemberCreateOrConnectWithoutProjectInput
      | ProjectMemberCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput
      | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ProjectMemberCreateManyProjectInputEnvelope;
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    disconnect?:
      | ProjectMemberWhereUniqueInput
      | ProjectMemberWhereUniqueInput[];
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[];
    update?:
      | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput
      | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ProjectMemberUpdateManyWithWhereWithoutProjectInput
      | ProjectMemberUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ProjectMemberScalarWhereInput
      | ProjectMemberScalarWhereInput[];
  };

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutProjectInput,
          TaskUncheckedCreateWithoutProjectInput
        >
      | TaskCreateWithoutProjectInput[]
      | TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutProjectInput
      | TaskCreateOrConnectWithoutProjectInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutProjectInput
      | TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: TaskCreateManyProjectInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutProjectInput
      | TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutProjectInput
      | TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type ChatMessageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ChatMessageCreateWithoutProjectInput,
          ChatMessageUncheckedCreateWithoutProjectInput
        >
      | ChatMessageCreateWithoutProjectInput[]
      | ChatMessageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ChatMessageCreateOrConnectWithoutProjectInput
      | ChatMessageCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ChatMessageUpsertWithWhereUniqueWithoutProjectInput
      | ChatMessageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ChatMessageCreateManyProjectInputEnvelope;
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[];
    update?:
      | ChatMessageUpdateWithWhereUniqueWithoutProjectInput
      | ChatMessageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ChatMessageUpdateManyWithWhereWithoutProjectInput
      | ChatMessageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
  };

  export type FeedbackUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          FeedbackCreateWithoutProjectInput,
          FeedbackUncheckedCreateWithoutProjectInput
        >
      | FeedbackCreateWithoutProjectInput[]
      | FeedbackUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | FeedbackCreateOrConnectWithoutProjectInput
      | FeedbackCreateOrConnectWithoutProjectInput[];
    upsert?:
      | FeedbackUpsertWithWhereUniqueWithoutProjectInput
      | FeedbackUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: FeedbackCreateManyProjectInputEnvelope;
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[];
    update?:
      | FeedbackUpdateWithWhereUniqueWithoutProjectInput
      | FeedbackUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | FeedbackUpdateManyWithWhereWithoutProjectInput
      | FeedbackUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
  };

  export type GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          GitHubActivityCreateWithoutProjectInput,
          GitHubActivityUncheckedCreateWithoutProjectInput
        >
      | GitHubActivityCreateWithoutProjectInput[]
      | GitHubActivityUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | GitHubActivityCreateOrConnectWithoutProjectInput
      | GitHubActivityCreateOrConnectWithoutProjectInput[];
    upsert?:
      | GitHubActivityUpsertWithWhereUniqueWithoutProjectInput
      | GitHubActivityUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: GitHubActivityCreateManyProjectInputEnvelope;
    set?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    disconnect?:
      | GitHubActivityWhereUniqueInput
      | GitHubActivityWhereUniqueInput[];
    delete?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    connect?: GitHubActivityWhereUniqueInput | GitHubActivityWhereUniqueInput[];
    update?:
      | GitHubActivityUpdateWithWhereUniqueWithoutProjectInput
      | GitHubActivityUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | GitHubActivityUpdateManyWithWhereWithoutProjectInput
      | GitHubActivityUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | GitHubActivityScalarWhereInput
      | GitHubActivityScalarWhereInput[];
  };

  export type InsightUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          InsightCreateWithoutProjectInput,
          InsightUncheckedCreateWithoutProjectInput
        >
      | InsightCreateWithoutProjectInput[]
      | InsightUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | InsightCreateOrConnectWithoutProjectInput
      | InsightCreateOrConnectWithoutProjectInput[];
    upsert?:
      | InsightUpsertWithWhereUniqueWithoutProjectInput
      | InsightUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: InsightCreateManyProjectInputEnvelope;
    set?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    disconnect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    delete?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[];
    update?:
      | InsightUpdateWithWhereUniqueWithoutProjectInput
      | InsightUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | InsightUpdateManyWithWhereWithoutProjectInput
      | InsightUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: InsightScalarWhereInput | InsightScalarWhereInput[];
  };

  export type PresenceLogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          PresenceLogCreateWithoutProjectInput,
          PresenceLogUncheckedCreateWithoutProjectInput
        >
      | PresenceLogCreateWithoutProjectInput[]
      | PresenceLogUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | PresenceLogCreateOrConnectWithoutProjectInput
      | PresenceLogCreateOrConnectWithoutProjectInput[];
    upsert?:
      | PresenceLogUpsertWithWhereUniqueWithoutProjectInput
      | PresenceLogUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: PresenceLogCreateManyProjectInputEnvelope;
    set?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    disconnect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    delete?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    connect?: PresenceLogWhereUniqueInput | PresenceLogWhereUniqueInput[];
    update?:
      | PresenceLogUpdateWithWhereUniqueWithoutProjectInput
      | PresenceLogUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | PresenceLogUpdateManyWithWhereWithoutProjectInput
      | PresenceLogUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<
      ProjectCreateWithoutMembersInput,
      ProjectUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type EnumProjectRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRole;
  };

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus;
  };

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput;
    upsert?: UserUpsertWithoutMembershipsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMembershipsInput,
        UserUpdateWithoutMembershipsInput
      >,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
  };

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<
      ProjectCreateWithoutMembersInput,
      ProjectUncheckedCreateWithoutMembersInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput;
    upsert?: ProjectUpsertWithoutMembersInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutMembersInput,
        ProjectUpdateWithoutMembersInput
      >,
      ProjectUncheckedUpdateWithoutMembersInput
    >;
  };

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<
      ProjectCreateWithoutTasksInput,
      ProjectUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<
      ProjectCreateWithoutTasksInput,
      ProjectUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;
    upsert?: ProjectUpsertWithoutTasksInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutTasksInput,
        ProjectUpdateWithoutTasksInput
      >,
      ProjectUncheckedUpdateWithoutTasksInput
    >;
  };

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;
    upsert?: UserUpsertWithoutTasksInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTasksInput,
        UserUpdateWithoutTasksInput
      >,
      UserUncheckedUpdateWithoutTasksInput
    >;
  };

  export type ProjectCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<
      ProjectCreateWithoutChatMessagesInput,
      ProjectUncheckedCreateWithoutChatMessagesInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutChatMessagesInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<
      ProjectCreateWithoutChatMessagesInput,
      ProjectUncheckedCreateWithoutChatMessagesInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutChatMessagesInput;
    upsert?: ProjectUpsertWithoutChatMessagesInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutChatMessagesInput,
        ProjectUpdateWithoutChatMessagesInput
      >,
      ProjectUncheckedUpdateWithoutChatMessagesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;
    upsert?: UserUpsertWithoutMessagesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutMessagesInput,
        UserUpdateWithoutMessagesInput
      >,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type ProjectCreateNestedOneWithoutGithubDataInput = {
    create?: XOR<
      ProjectCreateWithoutGithubDataInput,
      ProjectUncheckedCreateWithoutGithubDataInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutGithubDataInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutGithubActivitiesInput = {
    create?: XOR<
      UserCreateWithoutGithubActivitiesInput,
      UserUncheckedCreateWithoutGithubActivitiesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGithubActivitiesInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProjectUpdateOneRequiredWithoutGithubDataNestedInput = {
    create?: XOR<
      ProjectCreateWithoutGithubDataInput,
      ProjectUncheckedCreateWithoutGithubDataInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutGithubDataInput;
    upsert?: ProjectUpsertWithoutGithubDataInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutGithubDataInput,
        ProjectUpdateWithoutGithubDataInput
      >,
      ProjectUncheckedUpdateWithoutGithubDataInput
    >;
  };

  export type UserUpdateOneRequiredWithoutGithubActivitiesNestedInput = {
    create?: XOR<
      UserCreateWithoutGithubActivitiesInput,
      UserUncheckedCreateWithoutGithubActivitiesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGithubActivitiesInput;
    upsert?: UserUpsertWithoutGithubActivitiesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutGithubActivitiesInput,
        UserUpdateWithoutGithubActivitiesInput
      >,
      UserUncheckedUpdateWithoutGithubActivitiesInput
    >;
  };

  export type UserCreateNestedOneWithoutGoogleDocsDataInput = {
    create?: XOR<
      UserCreateWithoutGoogleDocsDataInput,
      UserUncheckedCreateWithoutGoogleDocsDataInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGoogleDocsDataInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutGoogleDocsDataNestedInput = {
    create?: XOR<
      UserCreateWithoutGoogleDocsDataInput,
      UserUncheckedCreateWithoutGoogleDocsDataInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGoogleDocsDataInput;
    upsert?: UserUpsertWithoutGoogleDocsDataInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutGoogleDocsDataInput,
        UserUpdateWithoutGoogleDocsDataInput
      >,
      UserUncheckedUpdateWithoutGoogleDocsDataInput
    >;
  };

  export type ProjectCreateNestedOneWithoutInsightsInput = {
    create?: XOR<
      ProjectCreateWithoutInsightsInput,
      ProjectUncheckedCreateWithoutInsightsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutInsightsInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutInsightsNestedInput = {
    create?: XOR<
      ProjectCreateWithoutInsightsInput,
      ProjectUncheckedCreateWithoutInsightsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutInsightsInput;
    upsert?: ProjectUpsertWithoutInsightsInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutInsightsInput,
        ProjectUpdateWithoutInsightsInput
      >,
      ProjectUncheckedUpdateWithoutInsightsInput
    >;
  };

  export type ProjectCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<
      ProjectCreateWithoutFeedbacksInput,
      ProjectUncheckedCreateWithoutFeedbacksInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutFeedbacksInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFeedbackGivenInput = {
    create?: XOR<
      UserCreateWithoutFeedbackGivenInput,
      UserUncheckedCreateWithoutFeedbackGivenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFeedbackReceivedInput = {
    create?: XOR<
      UserCreateWithoutFeedbackReceivedInput,
      UserUncheckedCreateWithoutFeedbackReceivedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<
      ProjectCreateWithoutFeedbacksInput,
      ProjectUncheckedCreateWithoutFeedbacksInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutFeedbacksInput;
    upsert?: ProjectUpsertWithoutFeedbacksInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutFeedbacksInput,
        ProjectUpdateWithoutFeedbacksInput
      >,
      ProjectUncheckedUpdateWithoutFeedbacksInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFeedbackGivenNestedInput = {
    create?: XOR<
      UserCreateWithoutFeedbackGivenInput,
      UserUncheckedCreateWithoutFeedbackGivenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput;
    upsert?: UserUpsertWithoutFeedbackGivenInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFeedbackGivenInput,
        UserUpdateWithoutFeedbackGivenInput
      >,
      UserUncheckedUpdateWithoutFeedbackGivenInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput = {
    create?: XOR<
      UserCreateWithoutFeedbackReceivedInput,
      UserUncheckedCreateWithoutFeedbackReceivedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput;
    upsert?: UserUpsertWithoutFeedbackReceivedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFeedbackReceivedInput,
        UserUpdateWithoutFeedbackReceivedInput
      >,
      UserUncheckedUpdateWithoutFeedbackReceivedInput
    >;
  };

  export type ProjectCreateNestedOneWithoutPresenceLogsInput = {
    create?: XOR<
      ProjectCreateWithoutPresenceLogsInput,
      ProjectUncheckedCreateWithoutPresenceLogsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutPresenceLogsInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutPresenceLogsInput = {
    create?: XOR<
      UserCreateWithoutPresenceLogsInput,
      UserUncheckedCreateWithoutPresenceLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPresenceLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumPresenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.PresenceStatus;
  };

  export type ProjectUpdateOneRequiredWithoutPresenceLogsNestedInput = {
    create?: XOR<
      ProjectCreateWithoutPresenceLogsInput,
      ProjectUncheckedCreateWithoutPresenceLogsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutPresenceLogsInput;
    upsert?: ProjectUpsertWithoutPresenceLogsInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutPresenceLogsInput,
        ProjectUpdateWithoutPresenceLogsInput
      >,
      ProjectUncheckedUpdateWithoutPresenceLogsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutPresenceLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutPresenceLogsInput,
      UserUncheckedCreateWithoutPresenceLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPresenceLogsInput;
    upsert?: UserUpsertWithoutPresenceLogsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPresenceLogsInput,
        UserUpdateWithoutPresenceLogsInput
      >,
      UserUncheckedUpdateWithoutPresenceLogsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProjectRole[]
      | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole;
  };

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MemberStatus[]
      | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus;
  };

  export type NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ProjectRole[]
        | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ProjectRole[]
        | ListEnumProjectRoleFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel>
        | $Enums.ProjectRole;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumProjectRoleFilter<$PrismaModel>;
      _max?: NestedEnumProjectRoleFilter<$PrismaModel>;
    };

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.MemberStatus
        | EnumMemberStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.MemberStatus[]
        | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.MemberStatus[]
        | ListEnumMemberStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.MemberStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumMemberStatusFilter<$PrismaModel>;
      _max?: NestedEnumMemberStatusFilter<$PrismaModel>;
    };

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.TaskPriority
        | EnumTaskPriorityFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.TaskPriority[]
        | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.TaskPriority[]
        | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel>
        | $Enums.TaskPriority;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumTaskPriorityFilter<$PrismaModel>;
      _max?: NestedEnumTaskPriorityFilter<$PrismaModel>;
    };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TaskStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>;
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedEnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PresenceStatus
      | EnumPresenceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus;
  };

  export type NestedEnumPresenceStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PresenceStatus
      | EnumPresenceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PresenceStatus[]
      | ListEnumPresenceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PresenceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>;
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>;
  };

  export type UserOAuthCreateWithoutUserInput = {
    id?: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserOAuthUncheckedCreateWithoutUserInput = {
    id?: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserOAuthCreateOrConnectWithoutUserInput = {
    where: UserOAuthWhereUniqueInput;
    create: XOR<
      UserOAuthCreateWithoutUserInput,
      UserOAuthUncheckedCreateWithoutUserInput
    >;
  };

  export type UserOAuthCreateManyUserInputEnvelope = {
    data: UserOAuthCreateManyUserInput | UserOAuthCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProjectCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutCreatedByInput,
      ProjectUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ProjectCreateManyCreatedByInputEnvelope = {
    data: ProjectCreateManyCreatedByInput | ProjectCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type GoogleDocsDataCreateWithoutUserInput = {
    id?: string;
    editsCount?: number | null;
    lastActivity?: Date | string | null;
  };

  export type GoogleDocsDataUncheckedCreateWithoutUserInput = {
    id?: string;
    editsCount?: number | null;
    lastActivity?: Date | string | null;
  };

  export type GoogleDocsDataCreateOrConnectWithoutUserInput = {
    where: GoogleDocsDataWhereUniqueInput;
    create: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
    project: ProjectCreateNestedOneWithoutMembersInput;
  };

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    projectId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput;
    create: XOR<
      ProjectMemberCreateWithoutUserInput,
      ProjectMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutChatMessagesInput;
  };

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string;
    projectId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput;
    create: XOR<
      ChatMessageCreateWithoutSenderInput,
      ChatMessageUncheckedCreateWithoutSenderInput
    >;
  };

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[];
    skipDuplicates?: boolean;
  };

  export type TaskCreateWithoutAssigneeInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
    project: ProjectCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    projectId: string;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutAssigneeInput,
      TaskUncheckedCreateWithoutAssigneeInput
    >;
  };

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
  };

  export type FeedbackCreateWithoutFromUserInput = {
    id?: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutFeedbacksInput;
    toUser: UserCreateNestedOneWithoutFeedbackReceivedInput;
  };

  export type FeedbackUncheckedCreateWithoutFromUserInput = {
    id?: string;
    projectId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateOrConnectWithoutFromUserInput = {
    where: FeedbackWhereUniqueInput;
    create: XOR<
      FeedbackCreateWithoutFromUserInput,
      FeedbackUncheckedCreateWithoutFromUserInput
    >;
  };

  export type FeedbackCreateManyFromUserInputEnvelope = {
    data: FeedbackCreateManyFromUserInput | FeedbackCreateManyFromUserInput[];
    skipDuplicates?: boolean;
  };

  export type FeedbackCreateWithoutToUserInput = {
    id?: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutFeedbacksInput;
    fromUser: UserCreateNestedOneWithoutFeedbackGivenInput;
  };

  export type FeedbackUncheckedCreateWithoutToUserInput = {
    id?: string;
    projectId: string;
    fromUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateOrConnectWithoutToUserInput = {
    where: FeedbackWhereUniqueInput;
    create: XOR<
      FeedbackCreateWithoutToUserInput,
      FeedbackUncheckedCreateWithoutToUserInput
    >;
  };

  export type FeedbackCreateManyToUserInputEnvelope = {
    data: FeedbackCreateManyToUserInput | FeedbackCreateManyToUserInput[];
    skipDuplicates?: boolean;
  };

  export type GitHubActivityCreateWithoutUserInput = {
    id?: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    project: ProjectCreateNestedOneWithoutGithubDataInput;
  };

  export type GitHubActivityUncheckedCreateWithoutUserInput = {
    id?: string;
    projectId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityCreateOrConnectWithoutUserInput = {
    where: GitHubActivityWhereUniqueInput;
    create: XOR<
      GitHubActivityCreateWithoutUserInput,
      GitHubActivityUncheckedCreateWithoutUserInput
    >;
  };

  export type GitHubActivityCreateManyUserInputEnvelope = {
    data:
      | GitHubActivityCreateManyUserInput
      | GitHubActivityCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PresenceLogCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
    project: ProjectCreateNestedOneWithoutPresenceLogsInput;
  };

  export type PresenceLogUncheckedCreateWithoutUserInput = {
    id?: string;
    projectId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type PresenceLogCreateOrConnectWithoutUserInput = {
    where: PresenceLogWhereUniqueInput;
    create: XOR<
      PresenceLogCreateWithoutUserInput,
      PresenceLogUncheckedCreateWithoutUserInput
    >;
  };

  export type PresenceLogCreateManyUserInputEnvelope = {
    data: PresenceLogCreateManyUserInput | PresenceLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
  };

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
  };

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserOAuthUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOAuthWhereUniqueInput;
    update: XOR<
      UserOAuthUpdateWithoutUserInput,
      UserOAuthUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserOAuthCreateWithoutUserInput,
      UserOAuthUncheckedCreateWithoutUserInput
    >;
  };

  export type UserOAuthUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOAuthWhereUniqueInput;
    data: XOR<
      UserOAuthUpdateWithoutUserInput,
      UserOAuthUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserOAuthUpdateManyWithWhereWithoutUserInput = {
    where: UserOAuthScalarWhereInput;
    data: XOR<
      UserOAuthUpdateManyMutationInput,
      UserOAuthUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type UserOAuthScalarWhereInput = {
    AND?: UserOAuthScalarWhereInput | UserOAuthScalarWhereInput[];
    OR?: UserOAuthScalarWhereInput[];
    NOT?: UserOAuthScalarWhereInput | UserOAuthScalarWhereInput[];
    id?: StringFilter<"UserOAuth"> | string;
    userId?: StringFilter<"UserOAuth"> | string;
    provider?: StringFilter<"UserOAuth"> | string;
    providerUserId?: StringFilter<"UserOAuth"> | string;
    accessTokenEnc?: StringFilter<"UserOAuth"> | string;
    tokenExpiresAt?: DateTimeNullableFilter<"UserOAuth"> | Date | string | null;
    scopes?: StringNullableFilter<"UserOAuth"> | string | null;
    createdAt?: DateTimeFilter<"UserOAuth"> | Date | string;
    updatedAt?: DateTimeFilter<"UserOAuth"> | Date | string;
  };

  export type ProjectUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput;
    update: XOR<
      ProjectUpdateWithoutCreatedByInput,
      ProjectUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      ProjectCreateWithoutCreatedByInput,
      ProjectUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ProjectUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput;
    data: XOR<
      ProjectUpdateWithoutCreatedByInput,
      ProjectUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type ProjectUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProjectScalarWhereInput;
    data: XOR<
      ProjectUpdateManyMutationInput,
      ProjectUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
    OR?: ProjectScalarWhereInput[];
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
    id?: StringFilter<"Project"> | string;
    name?: StringFilter<"Project"> | string;
    description?: StringNullableFilter<"Project"> | string | null;
    githubRepo?: StringFilter<"Project"> | string;
    createdById?: StringFilter<"Project"> | string;
    createdAt?: DateTimeFilter<"Project"> | Date | string;
    lastActive?: DateTimeNullableFilter<"Project"> | Date | string | null;
  };

  export type GoogleDocsDataUpsertWithoutUserInput = {
    update: XOR<
      GoogleDocsDataUpdateWithoutUserInput,
      GoogleDocsDataUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      GoogleDocsDataCreateWithoutUserInput,
      GoogleDocsDataUncheckedCreateWithoutUserInput
    >;
    where?: GoogleDocsDataWhereInput;
  };

  export type GoogleDocsDataUpdateToOneWithWhereWithoutUserInput = {
    where?: GoogleDocsDataWhereInput;
    data: XOR<
      GoogleDocsDataUpdateWithoutUserInput,
      GoogleDocsDataUncheckedUpdateWithoutUserInput
    >;
  };

  export type GoogleDocsDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type GoogleDocsDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    editsCount?: NullableIntFieldUpdateOperationsInput | number | null;
    lastActivity?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput;
    update: XOR<
      ProjectMemberUpdateWithoutUserInput,
      ProjectMemberUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProjectMemberCreateWithoutUserInput,
      ProjectMemberUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput;
    data: XOR<
      ProjectMemberUpdateWithoutUserInput,
      ProjectMemberUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput;
    data: XOR<
      ProjectMemberUpdateManyMutationInput,
      ProjectMemberUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[];
    OR?: ProjectMemberScalarWhereInput[];
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[];
    id?: StringFilter<"ProjectMember"> | string;
    userId?: StringFilter<"ProjectMember"> | string;
    projectId?: StringFilter<"ProjectMember"> | string;
    role?: EnumProjectRoleFilter<"ProjectMember"> | $Enums.ProjectRole;
    status?: EnumMemberStatusFilter<"ProjectMember"> | $Enums.MemberStatus;
    joinedAt?: DateTimeNullableFilter<"ProjectMember"> | Date | string | null;
  };

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput;
    update: XOR<
      ChatMessageUpdateWithoutSenderInput,
      ChatMessageUncheckedUpdateWithoutSenderInput
    >;
    create: XOR<
      ChatMessageCreateWithoutSenderInput,
      ChatMessageUncheckedCreateWithoutSenderInput
    >;
  };

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput;
    data: XOR<
      ChatMessageUpdateWithoutSenderInput,
      ChatMessageUncheckedUpdateWithoutSenderInput
    >;
  };

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput;
    data: XOR<
      ChatMessageUpdateManyMutationInput,
      ChatMessageUncheckedUpdateManyWithoutSenderInput
    >;
  };

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
    OR?: ChatMessageScalarWhereInput[];
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[];
    id?: StringFilter<"ChatMessage"> | string;
    projectId?: StringFilter<"ChatMessage"> | string;
    senderId?: StringFilter<"ChatMessage"> | string;
    message?: StringFilter<"ChatMessage"> | string;
    type?: StringFilter<"ChatMessage"> | string;
    aiLabel?: StringNullableFilter<"ChatMessage"> | string | null;
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string;
  };

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput;
    update: XOR<
      TaskUpdateWithoutAssigneeInput,
      TaskUncheckedUpdateWithoutAssigneeInput
    >;
    create: XOR<
      TaskCreateWithoutAssigneeInput,
      TaskUncheckedCreateWithoutAssigneeInput
    >;
  };

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput;
    data: XOR<
      TaskUpdateWithoutAssigneeInput,
      TaskUncheckedUpdateWithoutAssigneeInput
    >;
  };

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput;
    data: XOR<
      TaskUpdateManyMutationInput,
      TaskUncheckedUpdateManyWithoutAssigneeInput
    >;
  };

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[];
    OR?: TaskScalarWhereInput[];
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[];
    id?: StringFilter<"Task"> | string;
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority;
    projectId?: StringFilter<"Task"> | string;
    title?: StringFilter<"Task"> | string;
    description?: StringNullableFilter<"Task"> | string | null;
    weight?: FloatFilter<"Task"> | number;
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    assigneeId?: StringNullableFilter<"Task"> | string | null;
    createdAt?: DateTimeFilter<"Task"> | Date | string;
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null;
    score?: FloatNullableFilter<"Task"> | number | null;
  };

  export type FeedbackUpsertWithWhereUniqueWithoutFromUserInput = {
    where: FeedbackWhereUniqueInput;
    update: XOR<
      FeedbackUpdateWithoutFromUserInput,
      FeedbackUncheckedUpdateWithoutFromUserInput
    >;
    create: XOR<
      FeedbackCreateWithoutFromUserInput,
      FeedbackUncheckedCreateWithoutFromUserInput
    >;
  };

  export type FeedbackUpdateWithWhereUniqueWithoutFromUserInput = {
    where: FeedbackWhereUniqueInput;
    data: XOR<
      FeedbackUpdateWithoutFromUserInput,
      FeedbackUncheckedUpdateWithoutFromUserInput
    >;
  };

  export type FeedbackUpdateManyWithWhereWithoutFromUserInput = {
    where: FeedbackScalarWhereInput;
    data: XOR<
      FeedbackUpdateManyMutationInput,
      FeedbackUncheckedUpdateManyWithoutFromUserInput
    >;
  };

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
    OR?: FeedbackScalarWhereInput[];
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[];
    id?: StringFilter<"Feedback"> | string;
    projectId?: StringFilter<"Feedback"> | string;
    fromUserId?: StringFilter<"Feedback"> | string;
    toUserId?: StringFilter<"Feedback"> | string;
    effort?: IntFilter<"Feedback"> | number;
    collaboration?: IntFilter<"Feedback"> | number;
    reliability?: IntFilter<"Feedback"> | number;
    comment?: StringNullableFilter<"Feedback"> | string | null;
    aiFlag?: StringNullableFilter<"Feedback"> | string | null;
    createdAt?: DateTimeFilter<"Feedback"> | Date | string;
  };

  export type FeedbackUpsertWithWhereUniqueWithoutToUserInput = {
    where: FeedbackWhereUniqueInput;
    update: XOR<
      FeedbackUpdateWithoutToUserInput,
      FeedbackUncheckedUpdateWithoutToUserInput
    >;
    create: XOR<
      FeedbackCreateWithoutToUserInput,
      FeedbackUncheckedCreateWithoutToUserInput
    >;
  };

  export type FeedbackUpdateWithWhereUniqueWithoutToUserInput = {
    where: FeedbackWhereUniqueInput;
    data: XOR<
      FeedbackUpdateWithoutToUserInput,
      FeedbackUncheckedUpdateWithoutToUserInput
    >;
  };

  export type FeedbackUpdateManyWithWhereWithoutToUserInput = {
    where: FeedbackScalarWhereInput;
    data: XOR<
      FeedbackUpdateManyMutationInput,
      FeedbackUncheckedUpdateManyWithoutToUserInput
    >;
  };

  export type GitHubActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: GitHubActivityWhereUniqueInput;
    update: XOR<
      GitHubActivityUpdateWithoutUserInput,
      GitHubActivityUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      GitHubActivityCreateWithoutUserInput,
      GitHubActivityUncheckedCreateWithoutUserInput
    >;
  };

  export type GitHubActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: GitHubActivityWhereUniqueInput;
    data: XOR<
      GitHubActivityUpdateWithoutUserInput,
      GitHubActivityUncheckedUpdateWithoutUserInput
    >;
  };

  export type GitHubActivityUpdateManyWithWhereWithoutUserInput = {
    where: GitHubActivityScalarWhereInput;
    data: XOR<
      GitHubActivityUpdateManyMutationInput,
      GitHubActivityUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type GitHubActivityScalarWhereInput = {
    AND?: GitHubActivityScalarWhereInput | GitHubActivityScalarWhereInput[];
    OR?: GitHubActivityScalarWhereInput[];
    NOT?: GitHubActivityScalarWhereInput | GitHubActivityScalarWhereInput[];
    id?: StringFilter<"GitHubActivity"> | string;
    projectId?: StringFilter<"GitHubActivity"> | string;
    userId?: StringFilter<"GitHubActivity"> | string;
    commitCount?: IntFilter<"GitHubActivity"> | number;
    prCount?: IntFilter<"GitHubActivity"> | number;
    linesAdded?: IntFilter<"GitHubActivity"> | number;
    linesDeleted?: IntFilter<"GitHubActivity"> | number;
    weekStart?: DateTimeFilter<"GitHubActivity"> | Date | string;
    commitDetails?: JsonNullableFilter<"GitHubActivity">;
  };

  export type PresenceLogUpsertWithWhereUniqueWithoutUserInput = {
    where: PresenceLogWhereUniqueInput;
    update: XOR<
      PresenceLogUpdateWithoutUserInput,
      PresenceLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PresenceLogCreateWithoutUserInput,
      PresenceLogUncheckedCreateWithoutUserInput
    >;
  };

  export type PresenceLogUpdateWithWhereUniqueWithoutUserInput = {
    where: PresenceLogWhereUniqueInput;
    data: XOR<
      PresenceLogUpdateWithoutUserInput,
      PresenceLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type PresenceLogUpdateManyWithWhereWithoutUserInput = {
    where: PresenceLogScalarWhereInput;
    data: XOR<
      PresenceLogUpdateManyMutationInput,
      PresenceLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PresenceLogScalarWhereInput = {
    AND?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
    OR?: PresenceLogScalarWhereInput[];
    NOT?: PresenceLogScalarWhereInput | PresenceLogScalarWhereInput[];
    id?: StringFilter<"PresenceLog"> | string;
    projectId?: StringFilter<"PresenceLog"> | string;
    userId?: StringFilter<"PresenceLog"> | string;
    status?: EnumPresenceStatusFilter<"PresenceLog"> | $Enums.PresenceStatus;
    sessionStart?: DateTimeFilter<"PresenceLog"> | Date | string;
    sessionEnd?: DateTimeNullableFilter<"PresenceLog"> | Date | string | null;
    duration?: IntNullableFilter<"PresenceLog"> | number | null;
  };

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    update: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    data: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput;
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    OR?: RefreshTokenScalarWhereInput[];
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    id?: StringFilter<"RefreshToken"> | string;
    userId?: StringFilter<"RefreshToken"> | string;
    hashedToken?: StringFilter<"RefreshToken"> | string;
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null;
    replacedByToken?: StringNullableFilter<"RefreshToken"> | string | null;
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    lastUsedAt?: DateTimeFilter<"RefreshToken"> | Date | string;
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null;
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null;
    location?: StringNullableFilter<"RefreshToken"> | string | null;
    deviceName?: StringNullableFilter<"RefreshToken"> | string | null;
  };

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutOauthAccountsInput,
      UserUncheckedCreateWithoutOauthAccountsInput
    >;
  };

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<
      UserUpdateWithoutOauthAccountsInput,
      UserUncheckedUpdateWithoutOauthAccountsInput
    >;
    create: XOR<
      UserCreateWithoutOauthAccountsInput,
      UserUncheckedCreateWithoutOauthAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutOauthAccountsInput,
      UserUncheckedUpdateWithoutOauthAccountsInput
    >;
  };

  export type UserUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
  };

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
    user: UserCreateNestedOneWithoutMembershipsInput;
  };

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string;
    userId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput;
    create: XOR<
      ProjectMemberCreateWithoutProjectInput,
      ProjectMemberUncheckedCreateWithoutProjectInput
    >;
  };

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data:
      | ProjectMemberCreateManyProjectInput
      | ProjectMemberCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type TaskCreateWithoutProjectInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
    assignee?: UserCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    assigneeId?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutProjectInput,
      TaskUncheckedCreateWithoutProjectInput
    >;
  };

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type ChatMessageCreateWithoutProjectInput = {
    id?: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
    sender: UserCreateNestedOneWithoutMessagesInput;
  };

  export type ChatMessageUncheckedCreateWithoutProjectInput = {
    id?: string;
    senderId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type ChatMessageCreateOrConnectWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput;
    create: XOR<
      ChatMessageCreateWithoutProjectInput,
      ChatMessageUncheckedCreateWithoutProjectInput
    >;
  };

  export type ChatMessageCreateManyProjectInputEnvelope = {
    data:
      | ChatMessageCreateManyProjectInput
      | ChatMessageCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type FeedbackCreateWithoutProjectInput = {
    id?: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
    fromUser: UserCreateNestedOneWithoutFeedbackGivenInput;
    toUser: UserCreateNestedOneWithoutFeedbackReceivedInput;
  };

  export type FeedbackUncheckedCreateWithoutProjectInput = {
    id?: string;
    fromUserId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateOrConnectWithoutProjectInput = {
    where: FeedbackWhereUniqueInput;
    create: XOR<
      FeedbackCreateWithoutProjectInput,
      FeedbackUncheckedCreateWithoutProjectInput
    >;
  };

  export type FeedbackCreateManyProjectInputEnvelope = {
    data: FeedbackCreateManyProjectInput | FeedbackCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type GitHubActivityCreateWithoutProjectInput = {
    id?: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    user: UserCreateNestedOneWithoutGithubActivitiesInput;
  };

  export type GitHubActivityUncheckedCreateWithoutProjectInput = {
    id?: string;
    userId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityCreateOrConnectWithoutProjectInput = {
    where: GitHubActivityWhereUniqueInput;
    create: XOR<
      GitHubActivityCreateWithoutProjectInput,
      GitHubActivityUncheckedCreateWithoutProjectInput
    >;
  };

  export type GitHubActivityCreateManyProjectInputEnvelope = {
    data:
      | GitHubActivityCreateManyProjectInput
      | GitHubActivityCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type InsightCreateWithoutProjectInput = {
    id?: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUncheckedCreateWithoutProjectInput = {
    id?: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightCreateOrConnectWithoutProjectInput = {
    where: InsightWhereUniqueInput;
    create: XOR<
      InsightCreateWithoutProjectInput,
      InsightUncheckedCreateWithoutProjectInput
    >;
  };

  export type InsightCreateManyProjectInputEnvelope = {
    data: InsightCreateManyProjectInput | InsightCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type PresenceLogCreateWithoutProjectInput = {
    id?: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
    user: UserCreateNestedOneWithoutPresenceLogsInput;
  };

  export type PresenceLogUncheckedCreateWithoutProjectInput = {
    id?: string;
    userId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type PresenceLogCreateOrConnectWithoutProjectInput = {
    where: PresenceLogWhereUniqueInput;
    create: XOR<
      PresenceLogCreateWithoutProjectInput,
      PresenceLogUncheckedCreateWithoutProjectInput
    >;
  };

  export type PresenceLogCreateManyProjectInputEnvelope = {
    data:
      | PresenceLogCreateManyProjectInput
      | PresenceLogCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutProjectsCreatedInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProjectsCreatedInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProjectsCreatedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProjectsCreatedInput,
      UserUncheckedCreateWithoutProjectsCreatedInput
    >;
  };

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput;
    update: XOR<
      ProjectMemberUpdateWithoutProjectInput,
      ProjectMemberUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      ProjectMemberCreateWithoutProjectInput,
      ProjectMemberUncheckedCreateWithoutProjectInput
    >;
  };

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput;
    data: XOR<
      ProjectMemberUpdateWithoutProjectInput,
      ProjectMemberUncheckedUpdateWithoutProjectInput
    >;
  };

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput;
    data: XOR<
      ProjectMemberUpdateManyMutationInput,
      ProjectMemberUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput;
    update: XOR<
      TaskUpdateWithoutProjectInput,
      TaskUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      TaskCreateWithoutProjectInput,
      TaskUncheckedCreateWithoutProjectInput
    >;
  };

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput;
    data: XOR<
      TaskUpdateWithoutProjectInput,
      TaskUncheckedUpdateWithoutProjectInput
    >;
  };

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput;
    data: XOR<
      TaskUpdateManyMutationInput,
      TaskUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type ChatMessageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput;
    update: XOR<
      ChatMessageUpdateWithoutProjectInput,
      ChatMessageUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      ChatMessageCreateWithoutProjectInput,
      ChatMessageUncheckedCreateWithoutProjectInput
    >;
  };

  export type ChatMessageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ChatMessageWhereUniqueInput;
    data: XOR<
      ChatMessageUpdateWithoutProjectInput,
      ChatMessageUncheckedUpdateWithoutProjectInput
    >;
  };

  export type ChatMessageUpdateManyWithWhereWithoutProjectInput = {
    where: ChatMessageScalarWhereInput;
    data: XOR<
      ChatMessageUpdateManyMutationInput,
      ChatMessageUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type FeedbackUpsertWithWhereUniqueWithoutProjectInput = {
    where: FeedbackWhereUniqueInput;
    update: XOR<
      FeedbackUpdateWithoutProjectInput,
      FeedbackUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      FeedbackCreateWithoutProjectInput,
      FeedbackUncheckedCreateWithoutProjectInput
    >;
  };

  export type FeedbackUpdateWithWhereUniqueWithoutProjectInput = {
    where: FeedbackWhereUniqueInput;
    data: XOR<
      FeedbackUpdateWithoutProjectInput,
      FeedbackUncheckedUpdateWithoutProjectInput
    >;
  };

  export type FeedbackUpdateManyWithWhereWithoutProjectInput = {
    where: FeedbackScalarWhereInput;
    data: XOR<
      FeedbackUpdateManyMutationInput,
      FeedbackUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type GitHubActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: GitHubActivityWhereUniqueInput;
    update: XOR<
      GitHubActivityUpdateWithoutProjectInput,
      GitHubActivityUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      GitHubActivityCreateWithoutProjectInput,
      GitHubActivityUncheckedCreateWithoutProjectInput
    >;
  };

  export type GitHubActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: GitHubActivityWhereUniqueInput;
    data: XOR<
      GitHubActivityUpdateWithoutProjectInput,
      GitHubActivityUncheckedUpdateWithoutProjectInput
    >;
  };

  export type GitHubActivityUpdateManyWithWhereWithoutProjectInput = {
    where: GitHubActivityScalarWhereInput;
    data: XOR<
      GitHubActivityUpdateManyMutationInput,
      GitHubActivityUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type InsightUpsertWithWhereUniqueWithoutProjectInput = {
    where: InsightWhereUniqueInput;
    update: XOR<
      InsightUpdateWithoutProjectInput,
      InsightUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      InsightCreateWithoutProjectInput,
      InsightUncheckedCreateWithoutProjectInput
    >;
  };

  export type InsightUpdateWithWhereUniqueWithoutProjectInput = {
    where: InsightWhereUniqueInput;
    data: XOR<
      InsightUpdateWithoutProjectInput,
      InsightUncheckedUpdateWithoutProjectInput
    >;
  };

  export type InsightUpdateManyWithWhereWithoutProjectInput = {
    where: InsightScalarWhereInput;
    data: XOR<
      InsightUpdateManyMutationInput,
      InsightUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type InsightScalarWhereInput = {
    AND?: InsightScalarWhereInput | InsightScalarWhereInput[];
    OR?: InsightScalarWhereInput[];
    NOT?: InsightScalarWhereInput | InsightScalarWhereInput[];
    id?: StringFilter<"Insight"> | string;
    projectId?: StringFilter<"Insight"> | string;
    generatedAt?: DateTimeFilter<"Insight"> | Date | string;
    type?: StringFilter<"Insight"> | string;
    summary?: StringFilter<"Insight"> | string;
    metrics?: JsonNullableFilter<"Insight">;
  };

  export type PresenceLogUpsertWithWhereUniqueWithoutProjectInput = {
    where: PresenceLogWhereUniqueInput;
    update: XOR<
      PresenceLogUpdateWithoutProjectInput,
      PresenceLogUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      PresenceLogCreateWithoutProjectInput,
      PresenceLogUncheckedCreateWithoutProjectInput
    >;
  };

  export type PresenceLogUpdateWithWhereUniqueWithoutProjectInput = {
    where: PresenceLogWhereUniqueInput;
    data: XOR<
      PresenceLogUpdateWithoutProjectInput,
      PresenceLogUncheckedUpdateWithoutProjectInput
    >;
  };

  export type PresenceLogUpdateManyWithWhereWithoutProjectInput = {
    where: PresenceLogScalarWhereInput;
    data: XOR<
      PresenceLogUpdateManyMutationInput,
      PresenceLogUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type UserUpsertWithoutProjectsCreatedInput = {
    update: XOR<
      UserUpdateWithoutProjectsCreatedInput,
      UserUncheckedUpdateWithoutProjectsCreatedInput
    >;
    create: XOR<
      UserCreateWithoutProjectsCreatedInput,
      UserUncheckedCreateWithoutProjectsCreatedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProjectsCreatedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProjectsCreatedInput,
      UserUncheckedUpdateWithoutProjectsCreatedInput
    >;
  };

  export type UserUpdateWithoutProjectsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProjectsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
  };

  export type ProjectCreateWithoutMembersInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutMembersInput,
      ProjectUncheckedCreateWithoutMembersInput
    >;
  };

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<
      UserUpdateWithoutMembershipsInput,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
    create: XOR<
      UserCreateWithoutMembershipsInput,
      UserUncheckedCreateWithoutMembershipsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMembershipsInput,
      UserUncheckedUpdateWithoutMembershipsInput
    >;
  };

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<
      ProjectUpdateWithoutMembersInput,
      ProjectUncheckedUpdateWithoutMembersInput
    >;
    create: XOR<
      ProjectCreateWithoutMembersInput,
      ProjectUncheckedCreateWithoutMembersInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutMembersInput,
      ProjectUncheckedUpdateWithoutMembersInput
    >;
  };

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateWithoutTasksInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutTasksInput,
      ProjectUncheckedCreateWithoutTasksInput
    >;
  };

  export type UserCreateWithoutTasksInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
  };

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<
      ProjectUpdateWithoutTasksInput,
      ProjectUncheckedUpdateWithoutTasksInput
    >;
    create: XOR<
      ProjectCreateWithoutTasksInput,
      ProjectUncheckedCreateWithoutTasksInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutTasksInput,
      ProjectUncheckedUpdateWithoutTasksInput
    >;
  };

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutTasksInput = {
    update: XOR<
      UserUpdateWithoutTasksInput,
      UserUncheckedUpdateWithoutTasksInput
    >;
    create: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTasksInput,
      UserUncheckedUpdateWithoutTasksInput
    >;
  };

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutChatMessagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutChatMessagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutChatMessagesInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutChatMessagesInput,
      ProjectUncheckedCreateWithoutChatMessagesInput
    >;
  };

  export type UserCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
  };

  export type ProjectUpsertWithoutChatMessagesInput = {
    update: XOR<
      ProjectUpdateWithoutChatMessagesInput,
      ProjectUncheckedUpdateWithoutChatMessagesInput
    >;
    create: XOR<
      ProjectCreateWithoutChatMessagesInput,
      ProjectUncheckedCreateWithoutChatMessagesInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutChatMessagesInput,
      ProjectUncheckedUpdateWithoutChatMessagesInput
    >;
  };

  export type ProjectUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      UserCreateWithoutMessagesInput,
      UserUncheckedCreateWithoutMessagesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutMessagesInput,
      UserUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutGithubDataInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutGithubDataInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutGithubDataInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutGithubDataInput,
      ProjectUncheckedCreateWithoutGithubDataInput
    >;
  };

  export type UserCreateWithoutGithubActivitiesInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutGithubActivitiesInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutGithubActivitiesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutGithubActivitiesInput,
      UserUncheckedCreateWithoutGithubActivitiesInput
    >;
  };

  export type ProjectUpsertWithoutGithubDataInput = {
    update: XOR<
      ProjectUpdateWithoutGithubDataInput,
      ProjectUncheckedUpdateWithoutGithubDataInput
    >;
    create: XOR<
      ProjectCreateWithoutGithubDataInput,
      ProjectUncheckedCreateWithoutGithubDataInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutGithubDataInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutGithubDataInput,
      ProjectUncheckedUpdateWithoutGithubDataInput
    >;
  };

  export type ProjectUpdateWithoutGithubDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutGithubDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutGithubActivitiesInput = {
    update: XOR<
      UserUpdateWithoutGithubActivitiesInput,
      UserUncheckedUpdateWithoutGithubActivitiesInput
    >;
    create: XOR<
      UserCreateWithoutGithubActivitiesInput,
      UserUncheckedCreateWithoutGithubActivitiesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutGithubActivitiesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutGithubActivitiesInput,
      UserUncheckedUpdateWithoutGithubActivitiesInput
    >;
  };

  export type UserUpdateWithoutGithubActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutGithubActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutGoogleDocsDataInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutGoogleDocsDataInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutGoogleDocsDataInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutGoogleDocsDataInput,
      UserUncheckedCreateWithoutGoogleDocsDataInput
    >;
  };

  export type UserUpsertWithoutGoogleDocsDataInput = {
    update: XOR<
      UserUpdateWithoutGoogleDocsDataInput,
      UserUncheckedUpdateWithoutGoogleDocsDataInput
    >;
    create: XOR<
      UserCreateWithoutGoogleDocsDataInput,
      UserUncheckedCreateWithoutGoogleDocsDataInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutGoogleDocsDataInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutGoogleDocsDataInput,
      UserUncheckedUpdateWithoutGoogleDocsDataInput
    >;
  };

  export type UserUpdateWithoutGoogleDocsDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutGoogleDocsDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutInsightsInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutInsightsInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutInsightsInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutInsightsInput,
      ProjectUncheckedCreateWithoutInsightsInput
    >;
  };

  export type ProjectUpsertWithoutInsightsInput = {
    update: XOR<
      ProjectUpdateWithoutInsightsInput,
      ProjectUncheckedUpdateWithoutInsightsInput
    >;
    create: XOR<
      ProjectCreateWithoutInsightsInput,
      ProjectUncheckedCreateWithoutInsightsInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutInsightsInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutInsightsInput,
      ProjectUncheckedUpdateWithoutInsightsInput
    >;
  };

  export type ProjectUpdateWithoutInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateWithoutFeedbacksInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutFeedbacksInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutFeedbacksInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutFeedbacksInput,
      ProjectUncheckedCreateWithoutFeedbacksInput
    >;
  };

  export type UserCreateWithoutFeedbackGivenInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFeedbackGivenInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFeedbackGivenInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFeedbackGivenInput,
      UserUncheckedCreateWithoutFeedbackGivenInput
    >;
  };

  export type UserCreateWithoutFeedbackReceivedInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFeedbackReceivedInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    presenceLogs?: PresenceLogUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFeedbackReceivedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFeedbackReceivedInput,
      UserUncheckedCreateWithoutFeedbackReceivedInput
    >;
  };

  export type ProjectUpsertWithoutFeedbacksInput = {
    update: XOR<
      ProjectUpdateWithoutFeedbacksInput,
      ProjectUncheckedUpdateWithoutFeedbacksInput
    >;
    create: XOR<
      ProjectCreateWithoutFeedbacksInput,
      ProjectUncheckedCreateWithoutFeedbacksInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutFeedbacksInput,
      ProjectUncheckedUpdateWithoutFeedbacksInput
    >;
  };

  export type ProjectUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutFeedbackGivenInput = {
    update: XOR<
      UserUpdateWithoutFeedbackGivenInput,
      UserUncheckedUpdateWithoutFeedbackGivenInput
    >;
    create: XOR<
      UserCreateWithoutFeedbackGivenInput,
      UserUncheckedCreateWithoutFeedbackGivenInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFeedbackGivenInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFeedbackGivenInput,
      UserUncheckedUpdateWithoutFeedbackGivenInput
    >;
  };

  export type UserUpdateWithoutFeedbackGivenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFeedbackGivenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserUpsertWithoutFeedbackReceivedInput = {
    update: XOR<
      UserUpdateWithoutFeedbackReceivedInput,
      UserUncheckedUpdateWithoutFeedbackReceivedInput
    >;
    create: XOR<
      UserCreateWithoutFeedbackReceivedInput,
      UserUncheckedCreateWithoutFeedbackReceivedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFeedbackReceivedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFeedbackReceivedInput,
      UserUncheckedUpdateWithoutFeedbackReceivedInput
    >;
  };

  export type UserUpdateWithoutFeedbackReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFeedbackReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutPresenceLogsInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberCreateNestedManyWithoutProjectInput;
    tasks?: TaskCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityCreateNestedManyWithoutProjectInput;
    insights?: InsightCreateNestedManyWithoutProjectInput;
    createdBy: UserCreateNestedOneWithoutProjectsCreatedInput;
  };

  export type ProjectUncheckedCreateWithoutPresenceLogsInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdById: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutProjectInput;
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutProjectInput;
    githubData?: GitHubActivityUncheckedCreateNestedManyWithoutProjectInput;
    insights?: InsightUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutPresenceLogsInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutPresenceLogsInput,
      ProjectUncheckedCreateWithoutPresenceLogsInput
    >;
  };

  export type UserCreateWithoutPresenceLogsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput;
    messages?: ChatMessageCreateNestedManyWithoutSenderInput;
    tasks?: TaskCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPresenceLogsInput = {
    id?: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    oauthProvider?: string;
    oauthId: string;
    createdAt?: Date | string;
    oauthAccounts?: UserOAuthUncheckedCreateNestedManyWithoutUserInput;
    projectsCreated?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput;
    googleDocsData?: GoogleDocsDataUncheckedCreateNestedOneWithoutUserInput;
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput;
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutFromUserInput;
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutToUserInput;
    githubActivities?: GitHubActivityUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPresenceLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPresenceLogsInput,
      UserUncheckedCreateWithoutPresenceLogsInput
    >;
  };

  export type ProjectUpsertWithoutPresenceLogsInput = {
    update: XOR<
      ProjectUpdateWithoutPresenceLogsInput,
      ProjectUncheckedUpdateWithoutPresenceLogsInput
    >;
    create: XOR<
      ProjectCreateWithoutPresenceLogsInput,
      ProjectUncheckedCreateWithoutPresenceLogsInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutPresenceLogsInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutPresenceLogsInput,
      ProjectUncheckedUpdateWithoutPresenceLogsInput
    >;
  };

  export type ProjectUpdateWithoutPresenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutProjectsCreatedNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutPresenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutPresenceLogsInput = {
    update: XOR<
      UserUpdateWithoutPresenceLogsInput,
      UserUncheckedUpdateWithoutPresenceLogsInput
    >;
    create: XOR<
      UserCreateWithoutPresenceLogsInput,
      UserUncheckedCreateWithoutPresenceLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPresenceLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPresenceLogsInput,
      UserUncheckedUpdateWithoutPresenceLogsInput
    >;
  };

  export type UserUpdateWithoutPresenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPresenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    oauthProvider?: StringFieldUpdateOperationsInput | string;
    oauthId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    oauthAccounts?: UserOAuthUncheckedUpdateManyWithoutUserNestedInput;
    projectsCreated?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput;
    googleDocsData?: GoogleDocsDataUncheckedUpdateOneWithoutUserNestedInput;
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput;
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutFromUserNestedInput;
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutToUserNestedInput;
    githubActivities?: GitHubActivityUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserOAuthCreateManyUserInput = {
    id?: string;
    provider: string;
    providerUserId: string;
    accessTokenEnc: string;
    tokenExpiresAt?: Date | string | null;
    scopes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProjectCreateManyCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    githubRepo: string;
    createdAt?: Date | string;
    lastActive?: Date | string | null;
  };

  export type ProjectMemberCreateManyUserInput = {
    id?: string;
    projectId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type ChatMessageCreateManySenderInput = {
    id?: string;
    projectId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type TaskCreateManyAssigneeInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    projectId: string;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type FeedbackCreateManyFromUserInput = {
    id?: string;
    projectId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateManyToUserInput = {
    id?: string;
    projectId: string;
    fromUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type GitHubActivityCreateManyUserInput = {
    id?: string;
    projectId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type PresenceLogCreateManyUserInput = {
    id?: string;
    projectId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type RefreshTokenCreateManyUserInput = {
    id?: string;
    hashedToken: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    replacedByToken?: string | null;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    userAgent?: string | null;
    ipAddress?: string | null;
    location?: string | null;
    deviceName?: string | null;
  };

  export type UserOAuthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserOAuthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserOAuthUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerUserId?: StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: StringFieldUpdateOperationsInput | string;
    tokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scopes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUpdateManyWithoutProjectNestedInput;
    insights?: InsightUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutProjectNestedInput;
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProjectNestedInput;
    githubData?: GitHubActivityUncheckedUpdateManyWithoutProjectNestedInput;
    insights?: InsightUncheckedUpdateManyWithoutProjectNestedInput;
    presenceLogs?: PresenceLogUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    githubRepo?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutChatMessagesNestedInput;
  };

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    projectId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type FeedbackUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutFeedbacksNestedInput;
    toUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput;
  };

  export type FeedbackUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutFeedbacksNestedInput;
    fromUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput;
  };

  export type FeedbackUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GitHubActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    project?: ProjectUpdateOneRequiredWithoutGithubDataNestedInput;
  };

  export type GitHubActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type PresenceLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    project?: ProjectUpdateOneRequiredWithoutPresenceLogsNestedInput;
  };

  export type PresenceLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PresenceLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hashedToken?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProjectMemberCreateManyProjectInput = {
    id?: string;
    userId: string;
    role?: $Enums.ProjectRole;
    status?: $Enums.MemberStatus;
    joinedAt?: Date | string | null;
  };

  export type TaskCreateManyProjectInput = {
    id?: string;
    priority?: $Enums.TaskPriority;
    title: string;
    description?: string | null;
    weight?: number;
    status?: $Enums.TaskStatus;
    assigneeId?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    score?: number | null;
  };

  export type ChatMessageCreateManyProjectInput = {
    id?: string;
    senderId: string;
    message: string;
    type?: string;
    aiLabel?: string | null;
    createdAt?: Date | string;
  };

  export type FeedbackCreateManyProjectInput = {
    id?: string;
    fromUserId: string;
    toUserId: string;
    effort: number;
    collaboration: number;
    reliability: number;
    comment?: string | null;
    aiFlag?: string | null;
    createdAt?: Date | string;
  };

  export type GitHubActivityCreateManyProjectInput = {
    id?: string;
    userId: string;
    commitCount?: number;
    prCount?: number;
    linesAdded?: number;
    linesDeleted?: number;
    weekStart: Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightCreateManyProjectInput = {
    id?: string;
    generatedAt?: Date | string;
    type: string;
    summary: string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type PresenceLogCreateManyProjectInput = {
    id?: string;
    userId: string;
    status?: $Enums.PresenceStatus;
    sessionStart: Date | string;
    sessionEnd?: Date | string | null;
    duration?: number | null;
  };

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput;
  };

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole;
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    joinedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
    assignee?: UserUpdateOneWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    weight?: FloatFieldUpdateOperationsInput | number;
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    score?: NullableFloatFieldUpdateOperationsInput | number | null;
  };

  export type ChatMessageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type ChatMessageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChatMessageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    senderId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    aiLabel?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fromUser?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput;
    toUser?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput;
  };

  export type FeedbackUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeedbackUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fromUserId?: StringFieldUpdateOperationsInput | string;
    toUserId?: StringFieldUpdateOperationsInput | string;
    effort?: IntFieldUpdateOperationsInput | number;
    collaboration?: IntFieldUpdateOperationsInput | number;
    reliability?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    aiFlag?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GitHubActivityUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
    user?: UserUpdateOneRequiredWithoutGithubActivitiesNestedInput;
  };

  export type GitHubActivityUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GitHubActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    commitCount?: IntFieldUpdateOperationsInput | number;
    prCount?: IntFieldUpdateOperationsInput | number;
    linesAdded?: IntFieldUpdateOperationsInput | number;
    linesDeleted?: IntFieldUpdateOperationsInput | number;
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    commitDetails?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type InsightUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    metrics?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type PresenceLogUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
    user?: UserUpdateOneRequiredWithoutPresenceLogsNestedInput;
  };

  export type PresenceLogUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PresenceLogUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumPresenceStatusFieldUpdateOperationsInput
      | $Enums.PresenceStatus;
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessionEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    duration?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
