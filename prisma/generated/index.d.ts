
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PostVote
 * 
 */
export type PostVote = $Result.DefaultSelection<Prisma.$PostVotePayload>
/**
 * Model CommentVote
 * 
 */
export type CommentVote = $Result.DefaultSelection<Prisma.$CommentVotePayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>
/**
 * Model SavedComments
 * 
 */
export type SavedComments = $Result.DefaultSelection<Prisma.$SavedCommentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postVote`: Exposes CRUD operations for the **PostVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostVotes
    * const postVotes = await prisma.postVote.findMany()
    * ```
    */
  get postVote(): Prisma.PostVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentVote`: Exposes CRUD operations for the **CommentVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentVotes
    * const commentVotes = await prisma.commentVote.findMany()
    * ```
    */
  get commentVote(): Prisma.CommentVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedComments`: Exposes CRUD operations for the **SavedComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedComments
    * const savedComments = await prisma.savedComments.findMany()
    * ```
    */
  get savedComments(): Prisma.SavedCommentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Community: 'Community',
    Post: 'Post',
    Comment: 'Comment',
    PostVote: 'PostVote',
    CommentVote: 'CommentVote',
    SavedPost: 'SavedPost',
    SavedComments: 'SavedComments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "community" | "post" | "comment" | "postVote" | "commentVote" | "savedPost" | "savedComments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PostVote: {
        payload: Prisma.$PostVotePayload<ExtArgs>
        fields: Prisma.PostVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findFirst: {
            args: Prisma.PostVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findMany: {
            args: Prisma.PostVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          create: {
            args: Prisma.PostVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          createMany: {
            args: Prisma.PostVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          delete: {
            args: Prisma.PostVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          update: {
            args: Prisma.PostVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          deleteMany: {
            args: Prisma.PostVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          upsert: {
            args: Prisma.PostVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          aggregate: {
            args: Prisma.PostVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostVote>
          }
          groupBy: {
            args: Prisma.PostVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostVoteCountArgs<ExtArgs>
            result: $Utils.Optional<PostVoteCountAggregateOutputType> | number
          }
        }
      }
      CommentVote: {
        payload: Prisma.$CommentVotePayload<ExtArgs>
        fields: Prisma.CommentVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findFirst: {
            args: Prisma.CommentVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findMany: {
            args: Prisma.CommentVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          create: {
            args: Prisma.CommentVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          createMany: {
            args: Prisma.CommentVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          delete: {
            args: Prisma.CommentVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          update: {
            args: Prisma.CommentVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          deleteMany: {
            args: Prisma.CommentVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          upsert: {
            args: Prisma.CommentVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          aggregate: {
            args: Prisma.CommentVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentVote>
          }
          groupBy: {
            args: Prisma.CommentVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentVoteCountArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
      SavedComments: {
        payload: Prisma.$SavedCommentsPayload<ExtArgs>
        fields: Prisma.SavedCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          findFirst: {
            args: Prisma.SavedCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          findMany: {
            args: Prisma.SavedCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>[]
          }
          create: {
            args: Prisma.SavedCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          createMany: {
            args: Prisma.SavedCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>[]
          }
          delete: {
            args: Prisma.SavedCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          update: {
            args: Prisma.SavedCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          deleteMany: {
            args: Prisma.SavedCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>[]
          }
          upsert: {
            args: Prisma.SavedCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedCommentsPayload>
          }
          aggregate: {
            args: Prisma.SavedCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedComments>
          }
          groupBy: {
            args: Prisma.SavedCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<SavedCommentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    community?: CommunityOmit
    post?: PostOmit
    comment?: CommentOmit
    postVote?: PostVoteOmit
    commentVote?: CommentVoteOmit
    savedPost?: SavedPostOmit
    savedComments?: SavedCommentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    communities: number
    followed: number
    comments: number
    posts: number
    postVotes: number
    commentVotes: number
    savedPost: number
    savedComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
    followed?: boolean | UserCountOutputTypeCountFollowedArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postVotes?: boolean | UserCountOutputTypeCountPostVotesArgs
    commentVotes?: boolean | UserCountOutputTypeCountCommentVotesArgs
    savedPost?: boolean | UserCountOutputTypeCountSavedPostArgs
    savedComments?: boolean | UserCountOutputTypeCountSavedCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCommentsWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    followers: number
    posts: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | CommunityCountOutputTypeCountFollowersArgs
    posts?: boolean | CommunityCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    votes: number
    saved: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    votes?: boolean | PostCountOutputTypeCountVotesArgs
    saved?: boolean | PostCountOutputTypeCountSavedArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSavedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    votes: number
    saved: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    votes?: boolean | CommentCountOutputTypeCountVotesArgs
    saved?: boolean | CommentCountOutputTypeCountSavedArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountSavedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    avatar: string | null
    role: $Enums.Role | null
    provider: string | null
    universityId: string | null
    publicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    avatar: string | null
    role: $Enums.Role | null
    provider: string | null
    universityId: string | null
    publicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    username: number
    avatar: number
    role: number
    provider: number
    universityId: number
    publicKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatar?: true
    role?: true
    provider?: true
    universityId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatar?: true
    role?: true
    provider?: true
    universityId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatar?: true
    role?: true
    provider?: true
    universityId?: true
    publicKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    username: string
    avatar: string | null
    role: $Enums.Role
    provider: string
    universityId: string | null
    publicKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    provider?: boolean
    universityId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communities?: boolean | User$communitiesArgs<ExtArgs>
    followed?: boolean | User$followedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postVotes?: boolean | User$postVotesArgs<ExtArgs>
    commentVotes?: boolean | User$commentVotesArgs<ExtArgs>
    savedPost?: boolean | User$savedPostArgs<ExtArgs>
    savedComments?: boolean | User$savedCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    provider?: boolean
    universityId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    provider?: boolean
    universityId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    provider?: boolean
    universityId?: boolean
    publicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "username" | "avatar" | "role" | "provider" | "universityId" | "publicKey" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communities?: boolean | User$communitiesArgs<ExtArgs>
    followed?: boolean | User$followedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postVotes?: boolean | User$postVotesArgs<ExtArgs>
    commentVotes?: boolean | User$commentVotesArgs<ExtArgs>
    savedPost?: boolean | User$savedPostArgs<ExtArgs>
    savedComments?: boolean | User$savedCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      communities: Prisma.$CommunityPayload<ExtArgs>[]
      followed: Prisma.$CommunityPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      postVotes: Prisma.$PostVotePayload<ExtArgs>[]
      commentVotes: Prisma.$CommentVotePayload<ExtArgs>[]
      savedPost: Prisma.$SavedPostPayload<ExtArgs>[]
      savedComments: Prisma.$SavedCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      username: string
      avatar: string | null
      role: $Enums.Role
      provider: string
      universityId: string | null
      publicKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followed<T extends User$followedArgs<ExtArgs> = {}>(args?: Subset<T, User$followedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postVotes<T extends User$postVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$postVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentVotes<T extends User$commentVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPost<T extends User$savedPostArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedComments<T extends User$savedCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly provider: FieldRef<"User", 'String'>
    readonly universityId: FieldRef<"User", 'String'>
    readonly publicKey: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.followed
   */
  export type User$followedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.postVotes
   */
  export type User$postVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * User.commentVotes
   */
  export type User$commentVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * User.savedPost
   */
  export type User$savedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * User.savedComments
   */
  export type User$savedCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    where?: SavedCommentsWhereInput
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    cursor?: SavedCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCommentsScalarFieldEnum | SavedCommentsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    communityName: string | null
    description: string | null
    public: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    communityName: string | null
    description: string | null
    public: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    communityName: number
    description: number
    public: number
    topics: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityMinAggregateInputType = {
    id?: true
    communityName?: true
    description?: true
    public?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    communityName?: true
    description?: true
    public?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    communityName?: true
    description?: true
    public?: true
    topics?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    communityName: string
    description: string
    public: boolean
    topics: string[]
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityName?: boolean
    description?: boolean
    public?: boolean
    topics?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    followers?: boolean | Community$followersArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityName?: boolean
    description?: boolean
    public?: boolean
    topics?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityName?: boolean
    description?: boolean
    public?: boolean
    topics?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    communityName?: boolean
    description?: boolean
    public?: boolean
    topics?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communityName" | "description" | "public" | "topics" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    followers?: boolean | Community$followersArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      followers: Prisma.$UserPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      communityName: string
      description: string
      public: boolean
      topics: string[]
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    followers<T extends Community$followersArgs<ExtArgs> = {}>(args?: Subset<T, Community$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Community$postsArgs<ExtArgs> = {}>(args?: Subset<T, Community$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly communityName: FieldRef<"Community", 'String'>
    readonly description: FieldRef<"Community", 'String'>
    readonly public: FieldRef<"Community", 'Boolean'>
    readonly topics: FieldRef<"Community", 'String[]'>
    readonly createdById: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.followers
   */
  export type Community$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Community.posts
   */
  export type Community$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    communityId: string | null
    authorId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    communityId: string | null
    authorId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    body: number
    createdAt: number
    updatedAt: number
    communityId: number
    authorId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    body: JsonValue
    createdAt: Date
    updatedAt: Date
    communityId: string
    authorId: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    authorId?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    saved?: boolean | Post$savedArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    authorId?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    authorId?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "createdAt" | "updatedAt" | "communityId" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    saved?: boolean | Post$savedArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$PostVotePayload<ExtArgs>[]
      saved: Prisma.$SavedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      communityId: string
      authorId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Post$votesArgs<ExtArgs> = {}>(args?: Subset<T, Post$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved<T extends Post$savedArgs<ExtArgs> = {}>(args?: Subset<T, Post$savedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'Json'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly communityId: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.votes
   */
  export type Post$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * Post.saved
   */
  export type Post$savedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    commentById: string | null
    postId: string | null
    parentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    commentById: string | null
    postId: string | null
    parentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    body: number
    createdAt: number
    updatedAt: number
    commentById: number
    postId: number
    parentId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    commentById?: true
    postId?: true
    parentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    commentById?: true
    postId?: true
    parentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    commentById?: true
    postId?: true
    parentId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    body: string
    createdAt: Date
    updatedAt: Date
    commentById: string
    postId: string
    parentId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commentById?: boolean
    postId?: boolean
    parentId?: boolean
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    saved?: boolean | Comment$savedArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commentById?: boolean
    postId?: boolean
    parentId?: boolean
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commentById?: boolean
    postId?: boolean
    parentId?: boolean
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commentById?: boolean
    postId?: boolean
    parentId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "createdAt" | "updatedAt" | "commentById" | "postId" | "parentId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    saved?: boolean | Comment$savedArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentBy?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      commentBy: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$CommentVotePayload<ExtArgs>[]
      saved: Prisma.$SavedCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      body: string
      createdAt: Date
      updatedAt: Date
      commentById: string
      postId: string
      parentId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commentBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Comment$votesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved<T extends Comment$savedArgs<ExtArgs> = {}>(args?: Subset<T, Comment$savedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly commentById: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.votes
   */
  export type Comment$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * Comment.saved
   */
  export type Comment$savedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    where?: SavedCommentsWhereInput
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    cursor?: SavedCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedCommentsScalarFieldEnum | SavedCommentsScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PostVote
   */

  export type AggregatePostVote = {
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  export type PostVoteAvgAggregateOutputType = {
    value: number | null
  }

  export type PostVoteSumAggregateOutputType = {
    value: number | null
  }

  export type PostVoteMinAggregateOutputType = {
    id: string | null
    value: number | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type PostVoteMaxAggregateOutputType = {
    id: string | null
    value: number | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type PostVoteCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type PostVoteAvgAggregateInputType = {
    value?: true
  }

  export type PostVoteSumAggregateInputType = {
    value?: true
  }

  export type PostVoteMinAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostVoteMaxAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type PostVoteCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVote to aggregate.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostVotes
    **/
    _count?: true | PostVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostVoteMaxAggregateInputType
  }

  export type GetPostVoteAggregateType<T extends PostVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePostVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostVote[P]>
      : GetScalarType<T[P], AggregatePostVote[P]>
  }




  export type PostVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithAggregationInput | PostVoteOrderByWithAggregationInput[]
    by: PostVoteScalarFieldEnum[] | PostVoteScalarFieldEnum
    having?: PostVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostVoteCountAggregateInputType | true
    _avg?: PostVoteAvgAggregateInputType
    _sum?: PostVoteSumAggregateInputType
    _min?: PostVoteMinAggregateInputType
    _max?: PostVoteMaxAggregateInputType
  }

  export type PostVoteGroupByOutputType = {
    id: string
    value: number
    createdAt: Date
    userId: string
    postId: string
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  type GetPostVoteGroupByPayload<T extends PostVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
        }
      >
    >


  export type PostVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectScalar = {
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "createdAt" | "userId" | "postId", ExtArgs["result"]["postVote"]>
  export type PostVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostVote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      createdAt: Date
      userId: string
      postId: string
    }, ExtArgs["result"]["postVote"]>
    composites: {}
  }

  type PostVoteGetPayload<S extends boolean | null | undefined | PostVoteDefaultArgs> = $Result.GetResult<Prisma.$PostVotePayload, S>

  type PostVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostVoteCountAggregateInputType | true
    }

  export interface PostVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostVote'], meta: { name: 'PostVote' } }
    /**
     * Find zero or one PostVote that matches the filter.
     * @param {PostVoteFindUniqueArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostVoteFindUniqueArgs>(args: SelectSubset<T, PostVoteFindUniqueArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostVoteFindUniqueOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PostVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostVoteFindFirstArgs>(args?: SelectSubset<T, PostVoteFindFirstArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PostVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostVotes
     * const postVotes = await prisma.postVote.findMany()
     * 
     * // Get first 10 PostVotes
     * const postVotes = await prisma.postVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postVoteWithIdOnly = await prisma.postVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostVoteFindManyArgs>(args?: SelectSubset<T, PostVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostVote.
     * @param {PostVoteCreateArgs} args - Arguments to create a PostVote.
     * @example
     * // Create one PostVote
     * const PostVote = await prisma.postVote.create({
     *   data: {
     *     // ... data to create a PostVote
     *   }
     * })
     * 
     */
    create<T extends PostVoteCreateArgs>(args: SelectSubset<T, PostVoteCreateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostVotes.
     * @param {PostVoteCreateManyArgs} args - Arguments to create many PostVotes.
     * @example
     * // Create many PostVotes
     * const postVote = await prisma.postVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostVoteCreateManyArgs>(args?: SelectSubset<T, PostVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostVotes and returns the data saved in the database.
     * @param {PostVoteCreateManyAndReturnArgs} args - Arguments to create many PostVotes.
     * @example
     * // Create many PostVotes
     * const postVote = await prisma.postVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostVotes and only return the `id`
     * const postVoteWithIdOnly = await prisma.postVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PostVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostVote.
     * @param {PostVoteDeleteArgs} args - Arguments to delete one PostVote.
     * @example
     * // Delete one PostVote
     * const PostVote = await prisma.postVote.delete({
     *   where: {
     *     // ... filter to delete one PostVote
     *   }
     * })
     * 
     */
    delete<T extends PostVoteDeleteArgs>(args: SelectSubset<T, PostVoteDeleteArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostVote.
     * @param {PostVoteUpdateArgs} args - Arguments to update one PostVote.
     * @example
     * // Update one PostVote
     * const postVote = await prisma.postVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostVoteUpdateArgs>(args: SelectSubset<T, PostVoteUpdateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostVotes.
     * @param {PostVoteDeleteManyArgs} args - Arguments to filter PostVotes to delete.
     * @example
     * // Delete a few PostVotes
     * const { count } = await prisma.postVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostVoteDeleteManyArgs>(args?: SelectSubset<T, PostVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostVoteUpdateManyArgs>(args: SelectSubset<T, PostVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes and returns the data updated in the database.
     * @param {PostVoteUpdateManyAndReturnArgs} args - Arguments to update many PostVotes.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostVotes and only return the `id`
     * const postVoteWithIdOnly = await prisma.postVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PostVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostVote.
     * @param {PostVoteUpsertArgs} args - Arguments to update or create a PostVote.
     * @example
     * // Update or create a PostVote
     * const postVote = await prisma.postVote.upsert({
     *   create: {
     *     // ... data to create a PostVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostVote we want to update
     *   }
     * })
     */
    upsert<T extends PostVoteUpsertArgs>(args: SelectSubset<T, PostVoteUpsertArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteCountArgs} args - Arguments to filter PostVotes to count.
     * @example
     * // Count the number of PostVotes
     * const count = await prisma.postVote.count({
     *   where: {
     *     // ... the filter for the PostVotes we want to count
     *   }
     * })
    **/
    count<T extends PostVoteCountArgs>(
      args?: Subset<T, PostVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostVoteAggregateArgs>(args: Subset<T, PostVoteAggregateArgs>): Prisma.PrismaPromise<GetPostVoteAggregateType<T>>

    /**
     * Group by PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteGroupByArgs} args - Group by arguments.
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
      T extends PostVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostVoteGroupByArgs['orderBy'] }
        : { orderBy?: PostVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostVote model
   */
  readonly fields: PostVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostVote model
   */
  interface PostVoteFieldRefs {
    readonly id: FieldRef<"PostVote", 'String'>
    readonly value: FieldRef<"PostVote", 'Int'>
    readonly createdAt: FieldRef<"PostVote", 'DateTime'>
    readonly userId: FieldRef<"PostVote", 'String'>
    readonly postId: FieldRef<"PostVote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostVote findUnique
   */
  export type PostVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findUniqueOrThrow
   */
  export type PostVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findFirst
   */
  export type PostVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findFirstOrThrow
   */
  export type PostVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findMany
   */
  export type PostVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVotes to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote create
   */
  export type PostVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PostVote.
     */
    data: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
  }

  /**
   * PostVote createMany
   */
  export type PostVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostVote createManyAndReturn
   */
  export type PostVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostVote update
   */
  export type PostVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PostVote.
     */
    data: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
    /**
     * Choose, which PostVote to update.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote updateMany
   */
  export type PostVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to update.
     */
    limit?: number
  }

  /**
   * PostVote updateManyAndReturn
   */
  export type PostVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostVote upsert
   */
  export type PostVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PostVote to update in case it exists.
     */
    where: PostVoteWhereUniqueInput
    /**
     * In case the PostVote found by the `where` argument doesn't exist, create a new PostVote with this data.
     */
    create: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
    /**
     * In case the PostVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
  }

  /**
   * PostVote delete
   */
  export type PostVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter which PostVote to delete.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote deleteMany
   */
  export type PostVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVotes to delete
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to delete.
     */
    limit?: number
  }

  /**
   * PostVote without action
   */
  export type PostVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
  }


  /**
   * Model CommentVote
   */

  export type AggregateCommentVote = {
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  export type CommentVoteAvgAggregateOutputType = {
    value: number | null
  }

  export type CommentVoteSumAggregateOutputType = {
    value: number | null
  }

  export type CommentVoteMinAggregateOutputType = {
    id: string | null
    value: number | null
    createdAt: Date | null
    userId: string | null
    commentId: string | null
  }

  export type CommentVoteMaxAggregateOutputType = {
    id: string | null
    value: number | null
    createdAt: Date | null
    userId: string | null
    commentId: string | null
  }

  export type CommentVoteCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    userId: number
    commentId: number
    _all: number
  }


  export type CommentVoteAvgAggregateInputType = {
    value?: true
  }

  export type CommentVoteSumAggregateInputType = {
    value?: true
  }

  export type CommentVoteMinAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    commentId?: true
  }

  export type CommentVoteMaxAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    commentId?: true
  }

  export type CommentVoteCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    userId?: true
    commentId?: true
    _all?: true
  }

  export type CommentVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVote to aggregate.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentVotes
    **/
    _count?: true | CommentVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentVoteMaxAggregateInputType
  }

  export type GetCommentVoteAggregateType<T extends CommentVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentVote[P]>
      : GetScalarType<T[P], AggregateCommentVote[P]>
  }




  export type CommentVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithAggregationInput | CommentVoteOrderByWithAggregationInput[]
    by: CommentVoteScalarFieldEnum[] | CommentVoteScalarFieldEnum
    having?: CommentVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentVoteCountAggregateInputType | true
    _avg?: CommentVoteAvgAggregateInputType
    _sum?: CommentVoteSumAggregateInputType
    _min?: CommentVoteMinAggregateInputType
    _max?: CommentVoteMaxAggregateInputType
  }

  export type CommentVoteGroupByOutputType = {
    id: string
    value: number
    createdAt: Date
    userId: string
    commentId: string
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  type GetCommentVoteGroupByPayload<T extends CommentVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectScalar = {
    id?: boolean
    value?: boolean
    createdAt?: boolean
    userId?: boolean
    commentId?: boolean
  }

  export type CommentVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "createdAt" | "userId" | "commentId", ExtArgs["result"]["commentVote"]>
  export type CommentVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentVote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      createdAt: Date
      userId: string
      commentId: string
    }, ExtArgs["result"]["commentVote"]>
    composites: {}
  }

  type CommentVoteGetPayload<S extends boolean | null | undefined | CommentVoteDefaultArgs> = $Result.GetResult<Prisma.$CommentVotePayload, S>

  type CommentVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentVoteCountAggregateInputType | true
    }

  export interface CommentVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentVote'], meta: { name: 'CommentVote' } }
    /**
     * Find zero or one CommentVote that matches the filter.
     * @param {CommentVoteFindUniqueArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentVoteFindUniqueArgs>(args: SelectSubset<T, CommentVoteFindUniqueArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentVoteFindUniqueOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentVoteFindFirstArgs>(args?: SelectSubset<T, CommentVoteFindFirstArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentVotes
     * const commentVotes = await prisma.commentVote.findMany()
     * 
     * // Get first 10 CommentVotes
     * const commentVotes = await prisma.commentVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentVoteFindManyArgs>(args?: SelectSubset<T, CommentVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentVote.
     * @param {CommentVoteCreateArgs} args - Arguments to create a CommentVote.
     * @example
     * // Create one CommentVote
     * const CommentVote = await prisma.commentVote.create({
     *   data: {
     *     // ... data to create a CommentVote
     *   }
     * })
     * 
     */
    create<T extends CommentVoteCreateArgs>(args: SelectSubset<T, CommentVoteCreateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentVotes.
     * @param {CommentVoteCreateManyArgs} args - Arguments to create many CommentVotes.
     * @example
     * // Create many CommentVotes
     * const commentVote = await prisma.commentVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentVoteCreateManyArgs>(args?: SelectSubset<T, CommentVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentVotes and returns the data saved in the database.
     * @param {CommentVoteCreateManyAndReturnArgs} args - Arguments to create many CommentVotes.
     * @example
     * // Create many CommentVotes
     * const commentVote = await prisma.commentVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentVotes and only return the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentVote.
     * @param {CommentVoteDeleteArgs} args - Arguments to delete one CommentVote.
     * @example
     * // Delete one CommentVote
     * const CommentVote = await prisma.commentVote.delete({
     *   where: {
     *     // ... filter to delete one CommentVote
     *   }
     * })
     * 
     */
    delete<T extends CommentVoteDeleteArgs>(args: SelectSubset<T, CommentVoteDeleteArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentVote.
     * @param {CommentVoteUpdateArgs} args - Arguments to update one CommentVote.
     * @example
     * // Update one CommentVote
     * const commentVote = await prisma.commentVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentVoteUpdateArgs>(args: SelectSubset<T, CommentVoteUpdateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentVotes.
     * @param {CommentVoteDeleteManyArgs} args - Arguments to filter CommentVotes to delete.
     * @example
     * // Delete a few CommentVotes
     * const { count } = await prisma.commentVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentVoteDeleteManyArgs>(args?: SelectSubset<T, CommentVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentVoteUpdateManyArgs>(args: SelectSubset<T, CommentVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes and returns the data updated in the database.
     * @param {CommentVoteUpdateManyAndReturnArgs} args - Arguments to update many CommentVotes.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentVotes and only return the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentVote.
     * @param {CommentVoteUpsertArgs} args - Arguments to update or create a CommentVote.
     * @example
     * // Update or create a CommentVote
     * const commentVote = await prisma.commentVote.upsert({
     *   create: {
     *     // ... data to create a CommentVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentVote we want to update
     *   }
     * })
     */
    upsert<T extends CommentVoteUpsertArgs>(args: SelectSubset<T, CommentVoteUpsertArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteCountArgs} args - Arguments to filter CommentVotes to count.
     * @example
     * // Count the number of CommentVotes
     * const count = await prisma.commentVote.count({
     *   where: {
     *     // ... the filter for the CommentVotes we want to count
     *   }
     * })
    **/
    count<T extends CommentVoteCountArgs>(
      args?: Subset<T, CommentVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentVoteAggregateArgs>(args: Subset<T, CommentVoteAggregateArgs>): Prisma.PrismaPromise<GetCommentVoteAggregateType<T>>

    /**
     * Group by CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteGroupByArgs} args - Group by arguments.
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
      T extends CommentVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentVoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentVote model
   */
  readonly fields: CommentVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentVote model
   */
  interface CommentVoteFieldRefs {
    readonly id: FieldRef<"CommentVote", 'String'>
    readonly value: FieldRef<"CommentVote", 'Int'>
    readonly createdAt: FieldRef<"CommentVote", 'DateTime'>
    readonly userId: FieldRef<"CommentVote", 'String'>
    readonly commentId: FieldRef<"CommentVote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommentVote findUnique
   */
  export type CommentVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findUniqueOrThrow
   */
  export type CommentVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findFirst
   */
  export type CommentVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findFirstOrThrow
   */
  export type CommentVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findMany
   */
  export type CommentVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVotes to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote create
   */
  export type CommentVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentVote.
     */
    data: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
  }

  /**
   * CommentVote createMany
   */
  export type CommentVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentVote createManyAndReturn
   */
  export type CommentVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentVote update
   */
  export type CommentVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentVote.
     */
    data: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
    /**
     * Choose, which CommentVote to update.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote updateMany
   */
  export type CommentVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to update.
     */
    limit?: number
  }

  /**
   * CommentVote updateManyAndReturn
   */
  export type CommentVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentVote upsert
   */
  export type CommentVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentVote to update in case it exists.
     */
    where: CommentVoteWhereUniqueInput
    /**
     * In case the CommentVote found by the `where` argument doesn't exist, create a new CommentVote with this data.
     */
    create: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
    /**
     * In case the CommentVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
  }

  /**
   * CommentVote delete
   */
  export type CommentVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter which CommentVote to delete.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote deleteMany
   */
  export type CommentVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVotes to delete
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to delete.
     */
    limit?: number
  }

  /**
   * CommentVote without action
   */
  export type CommentVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SavedPostMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SavedPostCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SavedPostMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type SavedPostMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type SavedPostCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SavedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["savedPost"]>
  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedPosts and returns the data saved in the database.
     * @param {SavedPostCreateManyAndReturnArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedPosts and only return the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts and returns the data updated in the database.
     * @param {SavedPostUpdateManyAndReturnArgs} args - Arguments to update many SavedPosts.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedPosts and only return the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
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
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedPost model
   */
  interface SavedPostFieldRefs {
    readonly id: FieldRef<"SavedPost", 'String'>
    readonly postId: FieldRef<"SavedPost", 'String'>
    readonly userId: FieldRef<"SavedPost", 'String'>
    readonly createdAt: FieldRef<"SavedPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedPost createManyAndReturn
   */
  export type SavedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
  }

  /**
   * SavedPost updateManyAndReturn
   */
  export type SavedPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to delete.
     */
    limit?: number
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
  }


  /**
   * Model SavedComments
   */

  export type AggregateSavedComments = {
    _count: SavedCommentsCountAggregateOutputType | null
    _min: SavedCommentsMinAggregateOutputType | null
    _max: SavedCommentsMaxAggregateOutputType | null
  }

  export type SavedCommentsMinAggregateOutputType = {
    id: string | null
    commentId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SavedCommentsMaxAggregateOutputType = {
    id: string | null
    commentId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SavedCommentsCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SavedCommentsMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    createdAt?: true
  }

  export type SavedCommentsMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    createdAt?: true
  }

  export type SavedCommentsCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedComments to aggregate.
     */
    where?: SavedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedComments to fetch.
     */
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedComments
    **/
    _count?: true | SavedCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedCommentsMaxAggregateInputType
  }

  export type GetSavedCommentsAggregateType<T extends SavedCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedComments[P]>
      : GetScalarType<T[P], AggregateSavedComments[P]>
  }




  export type SavedCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedCommentsWhereInput
    orderBy?: SavedCommentsOrderByWithAggregationInput | SavedCommentsOrderByWithAggregationInput[]
    by: SavedCommentsScalarFieldEnum[] | SavedCommentsScalarFieldEnum
    having?: SavedCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedCommentsCountAggregateInputType | true
    _min?: SavedCommentsMinAggregateInputType
    _max?: SavedCommentsMaxAggregateInputType
  }

  export type SavedCommentsGroupByOutputType = {
    id: string
    commentId: string
    userId: string
    createdAt: Date
    _count: SavedCommentsCountAggregateOutputType | null
    _min: SavedCommentsMinAggregateOutputType | null
    _max: SavedCommentsMaxAggregateOutputType | null
  }

  type GetSavedCommentsGroupByPayload<T extends SavedCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], SavedCommentsGroupByOutputType[P]>
        }
      >
    >


  export type SavedCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedComments"]>

  export type SavedCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedComments"]>

  export type SavedCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedComments"]>

  export type SavedCommentsSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SavedCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "userId" | "createdAt", ExtArgs["result"]["savedComments"]>
  export type SavedCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedComments"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commentId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["savedComments"]>
    composites: {}
  }

  type SavedCommentsGetPayload<S extends boolean | null | undefined | SavedCommentsDefaultArgs> = $Result.GetResult<Prisma.$SavedCommentsPayload, S>

  type SavedCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedCommentsCountAggregateInputType | true
    }

  export interface SavedCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedComments'], meta: { name: 'SavedComments' } }
    /**
     * Find zero or one SavedComments that matches the filter.
     * @param {SavedCommentsFindUniqueArgs} args - Arguments to find a SavedComments
     * @example
     * // Get one SavedComments
     * const savedComments = await prisma.savedComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedCommentsFindUniqueArgs>(args: SelectSubset<T, SavedCommentsFindUniqueArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedCommentsFindUniqueOrThrowArgs} args - Arguments to find a SavedComments
     * @example
     * // Get one SavedComments
     * const savedComments = await prisma.savedComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsFindFirstArgs} args - Arguments to find a SavedComments
     * @example
     * // Get one SavedComments
     * const savedComments = await prisma.savedComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedCommentsFindFirstArgs>(args?: SelectSubset<T, SavedCommentsFindFirstArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsFindFirstOrThrowArgs} args - Arguments to find a SavedComments
     * @example
     * // Get one SavedComments
     * const savedComments = await prisma.savedComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedComments
     * const savedComments = await prisma.savedComments.findMany()
     * 
     * // Get first 10 SavedComments
     * const savedComments = await prisma.savedComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedCommentsWithIdOnly = await prisma.savedComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedCommentsFindManyArgs>(args?: SelectSubset<T, SavedCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedComments.
     * @param {SavedCommentsCreateArgs} args - Arguments to create a SavedComments.
     * @example
     * // Create one SavedComments
     * const SavedComments = await prisma.savedComments.create({
     *   data: {
     *     // ... data to create a SavedComments
     *   }
     * })
     * 
     */
    create<T extends SavedCommentsCreateArgs>(args: SelectSubset<T, SavedCommentsCreateArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedComments.
     * @param {SavedCommentsCreateManyArgs} args - Arguments to create many SavedComments.
     * @example
     * // Create many SavedComments
     * const savedComments = await prisma.savedComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedCommentsCreateManyArgs>(args?: SelectSubset<T, SavedCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedComments and returns the data saved in the database.
     * @param {SavedCommentsCreateManyAndReturnArgs} args - Arguments to create many SavedComments.
     * @example
     * // Create many SavedComments
     * const savedComments = await prisma.savedComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedComments and only return the `id`
     * const savedCommentsWithIdOnly = await prisma.savedComments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedComments.
     * @param {SavedCommentsDeleteArgs} args - Arguments to delete one SavedComments.
     * @example
     * // Delete one SavedComments
     * const SavedComments = await prisma.savedComments.delete({
     *   where: {
     *     // ... filter to delete one SavedComments
     *   }
     * })
     * 
     */
    delete<T extends SavedCommentsDeleteArgs>(args: SelectSubset<T, SavedCommentsDeleteArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedComments.
     * @param {SavedCommentsUpdateArgs} args - Arguments to update one SavedComments.
     * @example
     * // Update one SavedComments
     * const savedComments = await prisma.savedComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedCommentsUpdateArgs>(args: SelectSubset<T, SavedCommentsUpdateArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedComments.
     * @param {SavedCommentsDeleteManyArgs} args - Arguments to filter SavedComments to delete.
     * @example
     * // Delete a few SavedComments
     * const { count } = await prisma.savedComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedCommentsDeleteManyArgs>(args?: SelectSubset<T, SavedCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedComments
     * const savedComments = await prisma.savedComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedCommentsUpdateManyArgs>(args: SelectSubset<T, SavedCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedComments and returns the data updated in the database.
     * @param {SavedCommentsUpdateManyAndReturnArgs} args - Arguments to update many SavedComments.
     * @example
     * // Update many SavedComments
     * const savedComments = await prisma.savedComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedComments and only return the `id`
     * const savedCommentsWithIdOnly = await prisma.savedComments.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedComments.
     * @param {SavedCommentsUpsertArgs} args - Arguments to update or create a SavedComments.
     * @example
     * // Update or create a SavedComments
     * const savedComments = await prisma.savedComments.upsert({
     *   create: {
     *     // ... data to create a SavedComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedComments we want to update
     *   }
     * })
     */
    upsert<T extends SavedCommentsUpsertArgs>(args: SelectSubset<T, SavedCommentsUpsertArgs<ExtArgs>>): Prisma__SavedCommentsClient<$Result.GetResult<Prisma.$SavedCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsCountArgs} args - Arguments to filter SavedComments to count.
     * @example
     * // Count the number of SavedComments
     * const count = await prisma.savedComments.count({
     *   where: {
     *     // ... the filter for the SavedComments we want to count
     *   }
     * })
    **/
    count<T extends SavedCommentsCountArgs>(
      args?: Subset<T, SavedCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedCommentsAggregateArgs>(args: Subset<T, SavedCommentsAggregateArgs>): Prisma.PrismaPromise<GetSavedCommentsAggregateType<T>>

    /**
     * Group by SavedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedCommentsGroupByArgs} args - Group by arguments.
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
      T extends SavedCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedCommentsGroupByArgs['orderBy'] }
        : { orderBy?: SavedCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedComments model
   */
  readonly fields: SavedCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedComments model
   */
  interface SavedCommentsFieldRefs {
    readonly id: FieldRef<"SavedComments", 'String'>
    readonly commentId: FieldRef<"SavedComments", 'String'>
    readonly userId: FieldRef<"SavedComments", 'String'>
    readonly createdAt: FieldRef<"SavedComments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedComments findUnique
   */
  export type SavedCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SavedComments to fetch.
     */
    where: SavedCommentsWhereUniqueInput
  }

  /**
   * SavedComments findUniqueOrThrow
   */
  export type SavedCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SavedComments to fetch.
     */
    where: SavedCommentsWhereUniqueInput
  }

  /**
   * SavedComments findFirst
   */
  export type SavedCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SavedComments to fetch.
     */
    where?: SavedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedComments to fetch.
     */
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedComments.
     */
    cursor?: SavedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedComments.
     */
    distinct?: SavedCommentsScalarFieldEnum | SavedCommentsScalarFieldEnum[]
  }

  /**
   * SavedComments findFirstOrThrow
   */
  export type SavedCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SavedComments to fetch.
     */
    where?: SavedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedComments to fetch.
     */
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedComments.
     */
    cursor?: SavedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedComments.
     */
    distinct?: SavedCommentsScalarFieldEnum | SavedCommentsScalarFieldEnum[]
  }

  /**
   * SavedComments findMany
   */
  export type SavedCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which SavedComments to fetch.
     */
    where?: SavedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedComments to fetch.
     */
    orderBy?: SavedCommentsOrderByWithRelationInput | SavedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedComments.
     */
    cursor?: SavedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedComments.
     */
    skip?: number
    distinct?: SavedCommentsScalarFieldEnum | SavedCommentsScalarFieldEnum[]
  }

  /**
   * SavedComments create
   */
  export type SavedCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedComments.
     */
    data: XOR<SavedCommentsCreateInput, SavedCommentsUncheckedCreateInput>
  }

  /**
   * SavedComments createMany
   */
  export type SavedCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedComments.
     */
    data: SavedCommentsCreateManyInput | SavedCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedComments createManyAndReturn
   */
  export type SavedCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many SavedComments.
     */
    data: SavedCommentsCreateManyInput | SavedCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedComments update
   */
  export type SavedCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedComments.
     */
    data: XOR<SavedCommentsUpdateInput, SavedCommentsUncheckedUpdateInput>
    /**
     * Choose, which SavedComments to update.
     */
    where: SavedCommentsWhereUniqueInput
  }

  /**
   * SavedComments updateMany
   */
  export type SavedCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedComments.
     */
    data: XOR<SavedCommentsUpdateManyMutationInput, SavedCommentsUncheckedUpdateManyInput>
    /**
     * Filter which SavedComments to update
     */
    where?: SavedCommentsWhereInput
    /**
     * Limit how many SavedComments to update.
     */
    limit?: number
  }

  /**
   * SavedComments updateManyAndReturn
   */
  export type SavedCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * The data used to update SavedComments.
     */
    data: XOR<SavedCommentsUpdateManyMutationInput, SavedCommentsUncheckedUpdateManyInput>
    /**
     * Filter which SavedComments to update
     */
    where?: SavedCommentsWhereInput
    /**
     * Limit how many SavedComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedComments upsert
   */
  export type SavedCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedComments to update in case it exists.
     */
    where: SavedCommentsWhereUniqueInput
    /**
     * In case the SavedComments found by the `where` argument doesn't exist, create a new SavedComments with this data.
     */
    create: XOR<SavedCommentsCreateInput, SavedCommentsUncheckedCreateInput>
    /**
     * In case the SavedComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedCommentsUpdateInput, SavedCommentsUncheckedUpdateInput>
  }

  /**
   * SavedComments delete
   */
  export type SavedCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
    /**
     * Filter which SavedComments to delete.
     */
    where: SavedCommentsWhereUniqueInput
  }

  /**
   * SavedComments deleteMany
   */
  export type SavedCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedComments to delete
     */
    where?: SavedCommentsWhereInput
    /**
     * Limit how many SavedComments to delete.
     */
    limit?: number
  }

  /**
   * SavedComments without action
   */
  export type SavedCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedComments
     */
    select?: SavedCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedComments
     */
    omit?: SavedCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedCommentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    username: 'username',
    avatar: 'avatar',
    role: 'role',
    provider: 'provider',
    universityId: 'universityId',
    publicKey: 'publicKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    communityName: 'communityName',
    description: 'description',
    public: 'public',
    topics: 'topics',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    communityId: 'communityId',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    commentById: 'commentById',
    postId: 'postId',
    parentId: 'parentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostVoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostVoteScalarFieldEnum = (typeof PostVoteScalarFieldEnum)[keyof typeof PostVoteScalarFieldEnum]


  export const CommentVoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    userId: 'userId',
    commentId: 'commentId'
  };

  export type CommentVoteScalarFieldEnum = (typeof CommentVoteScalarFieldEnum)[keyof typeof CommentVoteScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


  export const SavedCommentsScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SavedCommentsScalarFieldEnum = (typeof SavedCommentsScalarFieldEnum)[keyof typeof SavedCommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: StringFilter<"User"> | string
    universityId?: StringNullableFilter<"User"> | string | null
    publicKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    communities?: CommunityListRelationFilter
    followed?: CommunityListRelationFilter
    comments?: CommentListRelationFilter
    posts?: PostListRelationFilter
    postVotes?: PostVoteListRelationFilter
    commentVotes?: CommentVoteListRelationFilter
    savedPost?: SavedPostListRelationFilter
    savedComments?: SavedCommentsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    universityId?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communities?: CommunityOrderByRelationAggregateInput
    followed?: CommunityOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    postVotes?: PostVoteOrderByRelationAggregateInput
    commentVotes?: CommentVoteOrderByRelationAggregateInput
    savedPost?: SavedPostOrderByRelationAggregateInput
    savedComments?: SavedCommentsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: StringFilter<"User"> | string
    universityId?: StringNullableFilter<"User"> | string | null
    publicKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    communities?: CommunityListRelationFilter
    followed?: CommunityListRelationFilter
    comments?: CommentListRelationFilter
    posts?: PostListRelationFilter
    postVotes?: PostVoteListRelationFilter
    commentVotes?: CommentVoteListRelationFilter
    savedPost?: SavedPostListRelationFilter
    savedComments?: SavedCommentsListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    universityId?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    provider?: StringWithAggregatesFilter<"User"> | string
    universityId?: StringNullableWithAggregatesFilter<"User"> | string | null
    publicKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    communityName?: StringFilter<"Community"> | string
    description?: StringFilter<"Community"> | string
    public?: BoolFilter<"Community"> | boolean
    topics?: StringNullableListFilter<"Community">
    createdById?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    followers?: UserListRelationFilter
    posts?: PostListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    public?: SortOrder
    topics?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    followers?: UserOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    communityName?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    description?: StringFilter<"Community"> | string
    public?: BoolFilter<"Community"> | boolean
    topics?: StringNullableListFilter<"Community">
    createdById?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    followers?: UserListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "communityName">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    public?: SortOrder
    topics?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    communityName?: StringWithAggregatesFilter<"Community"> | string
    description?: StringWithAggregatesFilter<"Community"> | string
    public?: BoolWithAggregatesFilter<"Community"> | boolean
    topics?: StringNullableListFilter<"Community">
    createdById?: StringWithAggregatesFilter<"Community"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: JsonFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    votes?: PostVoteListRelationFilter
    saved?: SavedPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    community?: CommunityOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    votes?: PostVoteOrderByRelationAggregateInput
    saved?: SavedPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    body?: JsonFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    votes?: PostVoteListRelationFilter
    saved?: SavedPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: JsonWithAggregatesFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    communityId?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    commentById?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    commentBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    votes?: CommentVoteListRelationFilter
    saved?: SavedCommentsListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentById?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    commentBy?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    votes?: CommentVoteOrderByRelationAggregateInput
    saved?: SavedCommentsOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    commentById?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    commentBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    votes?: CommentVoteListRelationFilter
    saved?: SavedCommentsListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentById?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    body?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    commentById?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type PostVoteWhereInput = {
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    id?: StringFilter<"PostVote"> | string
    value?: IntFilter<"PostVote"> | number
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostVoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: PostVoteUserIdPostIdCompoundUniqueInput
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    value?: IntFilter<"PostVote"> | number
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type PostVoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostVoteCountOrderByAggregateInput
    _avg?: PostVoteAvgOrderByAggregateInput
    _max?: PostVoteMaxOrderByAggregateInput
    _min?: PostVoteMinOrderByAggregateInput
    _sum?: PostVoteSumOrderByAggregateInput
  }

  export type PostVoteScalarWhereWithAggregatesInput = {
    AND?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    OR?: PostVoteScalarWhereWithAggregatesInput[]
    NOT?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostVote"> | string
    value?: IntWithAggregatesFilter<"PostVote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostVote"> | Date | string
    userId?: StringWithAggregatesFilter<"PostVote"> | string
    postId?: StringWithAggregatesFilter<"PostVote"> | string
  }

  export type CommentVoteWhereInput = {
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    id?: StringFilter<"CommentVote"> | string
    value?: IntFilter<"CommentVote"> | number
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentVoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: CommentVoteUserIdCommentIdCompoundUniqueInput
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    value?: IntFilter<"CommentVote"> | number
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id" | "userId_commentId">

  export type CommentVoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    _count?: CommentVoteCountOrderByAggregateInput
    _avg?: CommentVoteAvgOrderByAggregateInput
    _max?: CommentVoteMaxOrderByAggregateInput
    _min?: CommentVoteMinOrderByAggregateInput
    _sum?: CommentVoteSumOrderByAggregateInput
  }

  export type CommentVoteScalarWhereWithAggregatesInput = {
    AND?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    OR?: CommentVoteScalarWhereWithAggregatesInput[]
    NOT?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommentVote"> | string
    value?: IntWithAggregatesFilter<"CommentVote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CommentVote"> | Date | string
    userId?: StringWithAggregatesFilter<"CommentVote"> | string
    commentId?: StringWithAggregatesFilter<"CommentVote"> | string
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    posts?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: SavedPostUserIdPostIdCompoundUniqueInput
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    posts?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_postId">

  export type SavedPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedPost"> | string
    postId?: StringWithAggregatesFilter<"SavedPost"> | string
    userId?: StringWithAggregatesFilter<"SavedPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
  }

  export type SavedCommentsWhereInput = {
    AND?: SavedCommentsWhereInput | SavedCommentsWhereInput[]
    OR?: SavedCommentsWhereInput[]
    NOT?: SavedCommentsWhereInput | SavedCommentsWhereInput[]
    id?: StringFilter<"SavedComments"> | string
    commentId?: StringFilter<"SavedComments"> | string
    userId?: StringFilter<"SavedComments"> | string
    createdAt?: DateTimeFilter<"SavedComments"> | Date | string
    comments?: XOR<CommentScalarRelationFilter, CommentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedCommentsOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    comments?: CommentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: SavedCommentsUserIdCommentIdCompoundUniqueInput
    AND?: SavedCommentsWhereInput | SavedCommentsWhereInput[]
    OR?: SavedCommentsWhereInput[]
    NOT?: SavedCommentsWhereInput | SavedCommentsWhereInput[]
    commentId?: StringFilter<"SavedComments"> | string
    userId?: StringFilter<"SavedComments"> | string
    createdAt?: DateTimeFilter<"SavedComments"> | Date | string
    comments?: XOR<CommentScalarRelationFilter, CommentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_commentId">

  export type SavedCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedCommentsCountOrderByAggregateInput
    _max?: SavedCommentsMaxOrderByAggregateInput
    _min?: SavedCommentsMinOrderByAggregateInput
  }

  export type SavedCommentsScalarWhereWithAggregatesInput = {
    AND?: SavedCommentsScalarWhereWithAggregatesInput | SavedCommentsScalarWhereWithAggregatesInput[]
    OR?: SavedCommentsScalarWhereWithAggregatesInput[]
    NOT?: SavedCommentsScalarWhereWithAggregatesInput | SavedCommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedComments"> | string
    commentId?: StringWithAggregatesFilter<"SavedComments"> | string
    userId?: StringWithAggregatesFilter<"SavedComments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedComments"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCommunitiesInput
    followers?: UserCreateNestedManyWithoutFollowedInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: UserUncheckedCreateNestedManyWithoutFollowedInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    followers?: UserUpdateManyWithoutFollowedNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: UserUncheckedUpdateManyWithoutFollowedNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    saved?: SavedPostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    authorId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    saved?: SavedPostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    saved?: SavedPostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    saved?: SavedPostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    authorId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    parentId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostVoteCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostVotesInput
    post: PostCreateNestedOneWithoutVotesInput
  }

  export type PostVoteUncheckedCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type PostVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostVotesNestedInput
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PostVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteCreateManyInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type PostVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentVotesInput
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type CommentVoteUncheckedCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
    commentId: string
  }

  export type CommentVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentVotesNestedInput
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteCreateManyInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
    commentId: string
  }

  export type CommentVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateInput = {
    id?: string
    createdAt?: Date | string
    posts: PostCreateNestedOneWithoutSavedInput
    user: UserCreateNestedOneWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateOneRequiredWithoutSavedNestedInput
    user?: UserUpdateOneRequiredWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsCreateInput = {
    id?: string
    createdAt?: Date | string
    comments: CommentCreateNestedOneWithoutSavedInput
    user: UserCreateNestedOneWithoutSavedCommentsInput
  }

  export type SavedCommentsUncheckedCreateInput = {
    id?: string
    commentId: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedCommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateOneRequiredWithoutSavedNestedInput
    user?: UserUpdateOneRequiredWithoutSavedCommentsNestedInput
  }

  export type SavedCommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsCreateManyInput = {
    id?: string
    commentId: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedCommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostVoteListRelationFilter = {
    every?: PostVoteWhereInput
    some?: PostVoteWhereInput
    none?: PostVoteWhereInput
  }

  export type CommentVoteListRelationFilter = {
    every?: CommentVoteWhereInput
    some?: CommentVoteWhereInput
    none?: CommentVoteWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type SavedCommentsListRelationFilter = {
    every?: SavedCommentsWhereInput
    some?: SavedCommentsWhereInput
    none?: SavedCommentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    universityId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    universityId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    universityId?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    public?: SortOrder
    topics?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    public?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    public?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    authorId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentById?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentById?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentById?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PostVoteUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type PostVoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostVoteAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type PostVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostVoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostVoteSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentVoteUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type CommentVoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentVoteAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CommentVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentVoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentVoteSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type SavedPostUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type SavedPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCommentsUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type SavedCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutFollowersInput = {
    create?: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput> | CommunityCreateWithoutFollowersInput[] | CommunityUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutFollowersInput | CommunityCreateOrConnectWithoutFollowersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutCommentByInput = {
    create?: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput> | CommentCreateWithoutCommentByInput[] | CommentUncheckedCreateWithoutCommentByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentByInput | CommentCreateOrConnectWithoutCommentByInput[]
    createMany?: CommentCreateManyCommentByInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type SavedCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput> | SavedCommentsCreateWithoutUserInput[] | SavedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutUserInput | SavedCommentsCreateOrConnectWithoutUserInput[]
    createMany?: SavedCommentsCreateManyUserInputEnvelope
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput> | CommunityCreateWithoutFollowersInput[] | CommunityUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutFollowersInput | CommunityCreateOrConnectWithoutFollowersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCommentByInput = {
    create?: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput> | CommentCreateWithoutCommentByInput[] | CommentUncheckedCreateWithoutCommentByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentByInput | CommentCreateOrConnectWithoutCommentByInput[]
    createMany?: CommentCreateManyCommentByInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type SavedCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput> | SavedCommentsCreateWithoutUserInput[] | SavedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutUserInput | SavedCommentsCreateOrConnectWithoutUserInput[]
    createMany?: SavedCommentsCreateManyUserInputEnvelope
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommunityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput> | CommunityCreateWithoutFollowersInput[] | CommunityUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutFollowersInput | CommunityCreateOrConnectWithoutFollowersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutFollowersInput | CommunityUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutFollowersInput | CommunityUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutFollowersInput | CommunityUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutCommentByNestedInput = {
    create?: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput> | CommentCreateWithoutCommentByInput[] | CommentUncheckedCreateWithoutCommentByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentByInput | CommentCreateOrConnectWithoutCommentByInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCommentByInput | CommentUpsertWithWhereUniqueWithoutCommentByInput[]
    createMany?: CommentCreateManyCommentByInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCommentByInput | CommentUpdateWithWhereUniqueWithoutCommentByInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCommentByInput | CommentUpdateManyWithWhereWithoutCommentByInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type SavedCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput> | SavedCommentsCreateWithoutUserInput[] | SavedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutUserInput | SavedCommentsCreateOrConnectWithoutUserInput[]
    upsert?: SavedCommentsUpsertWithWhereUniqueWithoutUserInput | SavedCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCommentsCreateManyUserInputEnvelope
    set?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    disconnect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    delete?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    update?: SavedCommentsUpdateWithWhereUniqueWithoutUserInput | SavedCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCommentsUpdateManyWithWhereWithoutUserInput | SavedCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput> | CommunityCreateWithoutFollowersInput[] | CommunityUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutFollowersInput | CommunityCreateOrConnectWithoutFollowersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutFollowersInput | CommunityUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutFollowersInput | CommunityUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutFollowersInput | CommunityUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCommentByNestedInput = {
    create?: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput> | CommentCreateWithoutCommentByInput[] | CommentUncheckedCreateWithoutCommentByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentByInput | CommentCreateOrConnectWithoutCommentByInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCommentByInput | CommentUpsertWithWhereUniqueWithoutCommentByInput[]
    createMany?: CommentCreateManyCommentByInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCommentByInput | CommentUpdateWithWhereUniqueWithoutCommentByInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCommentByInput | CommentUpdateManyWithWhereWithoutCommentByInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type SavedCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput> | SavedCommentsCreateWithoutUserInput[] | SavedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutUserInput | SavedCommentsCreateOrConnectWithoutUserInput[]
    upsert?: SavedCommentsUpsertWithWhereUniqueWithoutUserInput | SavedCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedCommentsCreateManyUserInputEnvelope
    set?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    disconnect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    delete?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    update?: SavedCommentsUpdateWithWhereUniqueWithoutUserInput | SavedCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedCommentsUpdateManyWithWhereWithoutUserInput | SavedCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
  }

  export type CommunityCreatetopicsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFollowedInput = {
    create?: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput> | UserCreateWithoutFollowedInput[] | UserUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedInput | UserCreateOrConnectWithoutFollowedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedInput = {
    create?: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput> | UserCreateWithoutFollowedInput[] | UserUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedInput | UserCreateOrConnectWithoutFollowedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CommunityUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    upsert?: UserUpsertWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunitiesInput, UserUpdateWithoutCommunitiesInput>, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput> | UserCreateWithoutFollowedInput[] | UserUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedInput | UserCreateOrConnectWithoutFollowedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedInput | UserUpsertWithWhereUniqueWithoutFollowedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedInput | UserUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedInput | UserUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedNestedInput = {
    create?: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput> | UserCreateWithoutFollowedInput[] | UserUncheckedCreateWithoutFollowedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedInput | UserCreateOrConnectWithoutFollowedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedInput | UserUpsertWithWhereUniqueWithoutFollowedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedInput | UserUpdateWithWhereUniqueWithoutFollowedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedInput | UserUpdateManyWithWhereWithoutFollowedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutPostsInput = {
    create?: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput> | SavedPostCreateWithoutPostsInput[] | SavedPostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostsInput | SavedPostCreateOrConnectWithoutPostsInput[]
    createMany?: SavedPostCreateManyPostsInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput> | SavedPostCreateWithoutPostsInput[] | SavedPostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostsInput | SavedPostCreateOrConnectWithoutPostsInput[]
    createMany?: SavedPostCreateManyPostsInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type CommunityUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    upsert?: CommunityUpsertWithoutPostsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutPostsInput, CommunityUpdateWithoutPostsInput>, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutPostsNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput> | SavedPostCreateWithoutPostsInput[] | SavedPostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostsInput | SavedPostCreateOrConnectWithoutPostsInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostsInput | SavedPostUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: SavedPostCreateManyPostsInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostsInput | SavedPostUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostsInput | SavedPostUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput> | SavedPostCreateWithoutPostsInput[] | SavedPostUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostsInput | SavedPostCreateOrConnectWithoutPostsInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostsInput | SavedPostUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: SavedPostCreateManyPostsInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostsInput | SavedPostUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostsInput | SavedPostUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type SavedCommentsCreateNestedManyWithoutCommentsInput = {
    create?: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput> | SavedCommentsCreateWithoutCommentsInput[] | SavedCommentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutCommentsInput | SavedCommentsCreateOrConnectWithoutCommentsInput[]
    createMany?: SavedCommentsCreateManyCommentsInputEnvelope
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput> | SavedCommentsCreateWithoutCommentsInput[] | SavedCommentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutCommentsInput | SavedCommentsCreateOrConnectWithoutCommentsInput[]
    createMany?: SavedCommentsCreateManyCommentsInputEnvelope
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type SavedCommentsUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput> | SavedCommentsCreateWithoutCommentsInput[] | SavedCommentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutCommentsInput | SavedCommentsCreateOrConnectWithoutCommentsInput[]
    upsert?: SavedCommentsUpsertWithWhereUniqueWithoutCommentsInput | SavedCommentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: SavedCommentsCreateManyCommentsInputEnvelope
    set?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    disconnect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    delete?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    update?: SavedCommentsUpdateWithWhereUniqueWithoutCommentsInput | SavedCommentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: SavedCommentsUpdateManyWithWhereWithoutCommentsInput | SavedCommentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput> | SavedCommentsCreateWithoutCommentsInput[] | SavedCommentsUncheckedCreateWithoutCommentsInput[]
    connectOrCreate?: SavedCommentsCreateOrConnectWithoutCommentsInput | SavedCommentsCreateOrConnectWithoutCommentsInput[]
    upsert?: SavedCommentsUpsertWithWhereUniqueWithoutCommentsInput | SavedCommentsUpsertWithWhereUniqueWithoutCommentsInput[]
    createMany?: SavedCommentsCreateManyCommentsInputEnvelope
    set?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    disconnect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    delete?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    connect?: SavedCommentsWhereUniqueInput | SavedCommentsWhereUniqueInput[]
    update?: SavedCommentsUpdateWithWhereUniqueWithoutCommentsInput | SavedCommentsUpdateWithWhereUniqueWithoutCommentsInput[]
    updateMany?: SavedCommentsUpdateManyWithWhereWithoutCommentsInput | SavedCommentsUpdateManyWithWhereWithoutCommentsInput[]
    deleteMany?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostVotesInput = {
    create?: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutVotesInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    connect?: PostWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPostVotesNestedInput = {
    create?: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVotesInput
    upsert?: UserUpsertWithoutPostVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostVotesInput, UserUpdateWithoutPostVotesInput>, UserUncheckedUpdateWithoutPostVotesInput>
  }

  export type PostUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    upsert?: PostUpsertWithoutVotesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutVotesInput, PostUpdateWithoutVotesInput>, PostUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutCommentVotesInput = {
    create?: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVotesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutVotesInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentVotesNestedInput = {
    create?: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVotesInput
    upsert?: UserUpsertWithoutCommentVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentVotesInput, UserUpdateWithoutCommentVotesInput>, UserUncheckedUpdateWithoutCommentVotesInput>
  }

  export type CommentUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    upsert?: CommentUpsertWithoutVotesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutVotesInput, CommentUpdateWithoutVotesInput>, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type PostCreateNestedOneWithoutSavedInput = {
    create?: XOR<PostCreateWithoutSavedInput, PostUncheckedCreateWithoutSavedInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedPostInput = {
    create?: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutSavedNestedInput = {
    create?: XOR<PostCreateWithoutSavedInput, PostUncheckedCreateWithoutSavedInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedInput
    upsert?: PostUpsertWithoutSavedInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSavedInput, PostUpdateWithoutSavedInput>, PostUncheckedUpdateWithoutSavedInput>
  }

  export type UserUpdateOneRequiredWithoutSavedPostNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostInput
    upsert?: UserUpsertWithoutSavedPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedPostInput, UserUpdateWithoutSavedPostInput>, UserUncheckedUpdateWithoutSavedPostInput>
  }

  export type CommentCreateNestedOneWithoutSavedInput = {
    create?: XOR<CommentCreateWithoutSavedInput, CommentUncheckedCreateWithoutSavedInput>
    connectOrCreate?: CommentCreateOrConnectWithoutSavedInput
    connect?: CommentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedCommentsInput = {
    create?: XOR<UserCreateWithoutSavedCommentsInput, UserUncheckedCreateWithoutSavedCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentUpdateOneRequiredWithoutSavedNestedInput = {
    create?: XOR<CommentCreateWithoutSavedInput, CommentUncheckedCreateWithoutSavedInput>
    connectOrCreate?: CommentCreateOrConnectWithoutSavedInput
    upsert?: CommentUpsertWithoutSavedInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutSavedInput, CommentUpdateWithoutSavedInput>, CommentUncheckedUpdateWithoutSavedInput>
  }

  export type UserUpdateOneRequiredWithoutSavedCommentsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCommentsInput, UserUncheckedCreateWithoutSavedCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCommentsInput
    upsert?: UserUpsertWithoutSavedCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedCommentsInput, UserUpdateWithoutSavedCommentsInput>, UserUncheckedUpdateWithoutSavedCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CommunityCreateWithoutCreatedByInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: UserCreateNestedManyWithoutFollowedInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCreatedByInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: UserUncheckedCreateNestedManyWithoutFollowedInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityCreateManyCreatedByInputEnvelope = {
    data: CommunityCreateManyCreatedByInput | CommunityCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutFollowersInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCommunitiesInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutFollowersInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutFollowersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput>
  }

  export type CommentCreateWithoutCommentByInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutCommentByInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput>
  }

  export type CommentCreateManyCommentByInputEnvelope = {
    data: CommentCreateManyCommentByInput | CommentCreateManyCommentByInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    saved?: SavedPostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    saved?: SavedPostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostVoteCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutVotesInput
  }

  export type PostVoteUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    postId: string
  }

  export type PostVoteCreateOrConnectWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteCreateManyUserInputEnvelope = {
    data: PostVoteCreateManyUserInput | PostVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type CommentVoteUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    commentId: string
  }

  export type CommentVoteCreateOrConnectWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteCreateManyUserInputEnvelope = {
    data: CommentVoteCreateManyUserInput | CommentVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedPostCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    posts: PostCreateNestedOneWithoutSavedInput
  }

  export type SavedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostCreateManyUserInputEnvelope = {
    data: SavedPostCreateManyUserInput | SavedPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedCommentsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    comments: CommentCreateNestedOneWithoutSavedInput
  }

  export type SavedCommentsUncheckedCreateWithoutUserInput = {
    id?: string
    commentId: string
    createdAt?: Date | string
  }

  export type SavedCommentsCreateOrConnectWithoutUserInput = {
    where: SavedCommentsWhereUniqueInput
    create: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput>
  }

  export type SavedCommentsCreateManyUserInputEnvelope = {
    data: SavedCommentsCreateManyUserInput | SavedCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
  }

  export type CommunityUpdateManyWithWhereWithoutCreatedByInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: StringFilter<"Community"> | string
    communityName?: StringFilter<"Community"> | string
    description?: StringFilter<"Community"> | string
    public?: BoolFilter<"Community"> | boolean
    topics?: StringNullableListFilter<"Community">
    createdById?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type CommunityUpsertWithWhereUniqueWithoutFollowersInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutFollowersInput, CommunityUncheckedUpdateWithoutFollowersInput>
    create: XOR<CommunityCreateWithoutFollowersInput, CommunityUncheckedCreateWithoutFollowersInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutFollowersInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutFollowersInput, CommunityUncheckedUpdateWithoutFollowersInput>
  }

  export type CommunityUpdateManyWithWhereWithoutFollowersInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutFollowersInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCommentByInput, CommentUncheckedUpdateWithoutCommentByInput>
    create: XOR<CommentCreateWithoutCommentByInput, CommentUncheckedCreateWithoutCommentByInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCommentByInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCommentByInput, CommentUncheckedUpdateWithoutCommentByInput>
  }

  export type CommentUpdateManyWithWhereWithoutCommentByInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentByInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    commentById?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: JsonFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
  }

  export type PostVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutUserInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type PostVoteScalarWhereInput = {
    AND?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    OR?: PostVoteScalarWhereInput[]
    NOT?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    id?: StringFilter<"PostVote"> | string
    value?: IntFilter<"PostVote"> | number
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutUserInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentVoteScalarWhereInput = {
    AND?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    OR?: CommentVoteScalarWhereInput[]
    NOT?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    id?: StringFilter<"CommentVote"> | string
    value?: IntFilter<"CommentVote"> | number
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
  }

  export type SavedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutUserInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
  }

  export type SavedCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedCommentsWhereUniqueInput
    update: XOR<SavedCommentsUpdateWithoutUserInput, SavedCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<SavedCommentsCreateWithoutUserInput, SavedCommentsUncheckedCreateWithoutUserInput>
  }

  export type SavedCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedCommentsWhereUniqueInput
    data: XOR<SavedCommentsUpdateWithoutUserInput, SavedCommentsUncheckedUpdateWithoutUserInput>
  }

  export type SavedCommentsUpdateManyWithWhereWithoutUserInput = {
    where: SavedCommentsScalarWhereInput
    data: XOR<SavedCommentsUpdateManyMutationInput, SavedCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedCommentsScalarWhereInput = {
    AND?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
    OR?: SavedCommentsScalarWhereInput[]
    NOT?: SavedCommentsScalarWhereInput | SavedCommentsScalarWhereInput[]
    id?: StringFilter<"SavedComments"> | string
    commentId?: StringFilter<"SavedComments"> | string
    userId?: StringFilter<"SavedComments"> | string
    createdAt?: DateTimeFilter<"SavedComments"> | Date | string
  }

  export type UserCreateWithoutCommunitiesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserCreateWithoutFollowedInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowedInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput>
  }

  export type PostCreateWithoutCommunityInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    saved?: SavedPostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommunityInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    saved?: SavedPostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCommunityInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateManyCommunityInputEnvelope = {
    data: PostCreateManyCommunityInput | PostCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunitiesInput = {
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedInput, UserUncheckedUpdateWithoutFollowedInput>
    create: XOR<UserCreateWithoutFollowedInput, UserUncheckedCreateWithoutFollowedInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedInput, UserUncheckedUpdateWithoutFollowedInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: StringFilter<"User"> | string
    universityId?: StringNullableFilter<"User"> | string | null
    publicKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithWhereWithoutCommunityInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityCreateWithoutPostsInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCommunitiesInput
    followers?: UserCreateNestedManyWithoutFollowedInput
  }

  export type CommunityUncheckedCreateWithoutPostsInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    followers?: UserUncheckedCreateNestedManyWithoutFollowedInput
  }

  export type CommunityCreateOrConnectWithoutPostsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostVoteCreateWithoutPostInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostVotesInput
  }

  export type PostVoteUncheckedCreateWithoutPostInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
  }

  export type PostVoteCreateOrConnectWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteCreateManyPostInputEnvelope = {
    data: PostVoteCreateManyPostInput | PostVoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SavedPostCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateWithoutPostsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutPostsInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput>
  }

  export type SavedPostCreateManyPostsInputEnvelope = {
    data: SavedPostCreateManyPostsInput | SavedPostCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithoutPostsInput = {
    update: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutPostsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    followers?: UserUpdateManyWithoutFollowedNestedInput
  }

  export type CommunityUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: UserUncheckedUpdateManyWithoutFollowedNestedInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostVoteUpsertWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutPostInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutPostInput>
  }

  export type SavedPostUpsertWithWhereUniqueWithoutPostsInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutPostsInput, SavedPostUncheckedUpdateWithoutPostsInput>
    create: XOR<SavedPostCreateWithoutPostsInput, SavedPostUncheckedCreateWithoutPostsInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutPostsInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutPostsInput, SavedPostUncheckedUpdateWithoutPostsInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutPostsInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutPostsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    saved?: SavedPostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    authorId: string
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    saved?: SavedPostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    parentId?: string | null
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutCommentInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentVotesInput
  }

  export type CommentVoteUncheckedCreateWithoutCommentInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
  }

  export type CommentVoteCreateOrConnectWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteCreateManyCommentInputEnvelope = {
    data: CommentVoteCreateManyCommentInput | CommentVoteCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type SavedCommentsCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCommentsInput
  }

  export type SavedCommentsUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedCommentsCreateOrConnectWithoutCommentsInput = {
    where: SavedCommentsWhereUniqueInput
    create: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput>
  }

  export type SavedCommentsCreateManyCommentsInputEnvelope = {
    data: SavedCommentsCreateManyCommentsInput | SavedCommentsCreateManyCommentsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    saved?: SavedPostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    saved?: SavedPostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutCommentInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutCommentInput>
  }

  export type SavedCommentsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: SavedCommentsWhereUniqueInput
    update: XOR<SavedCommentsUpdateWithoutCommentsInput, SavedCommentsUncheckedUpdateWithoutCommentsInput>
    create: XOR<SavedCommentsCreateWithoutCommentsInput, SavedCommentsUncheckedCreateWithoutCommentsInput>
  }

  export type SavedCommentsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: SavedCommentsWhereUniqueInput
    data: XOR<SavedCommentsUpdateWithoutCommentsInput, SavedCommentsUncheckedUpdateWithoutCommentsInput>
  }

  export type SavedCommentsUpdateManyWithWhereWithoutCommentsInput = {
    where: SavedCommentsScalarWhereInput
    data: XOR<SavedCommentsUpdateManyMutationInput, SavedCommentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type UserCreateWithoutPostVotesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostVotesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
  }

  export type PostCreateWithoutVotesInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    saved?: SavedPostCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    authorId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    saved?: SavedPostUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutVotesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutPostVotesInput = {
    update: XOR<UserUpdateWithoutPostVotesInput, UserUncheckedUpdateWithoutPostVotesInput>
    create: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostVotesInput, UserUncheckedUpdateWithoutPostVotesInput>
  }

  export type UserUpdateWithoutPostVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutVotesInput = {
    update: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutVotesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
  }

  export type PostUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    saved?: SavedPostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    saved?: SavedPostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type UserCreateWithoutCommentVotesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentVotesInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
  }

  export type CommentCreateWithoutVotesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    saved?: SavedCommentsCreateNestedManyWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutVotesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    saved?: SavedCommentsUncheckedCreateNestedManyWithoutCommentsInput
  }

  export type CommentCreateOrConnectWithoutVotesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutCommentVotesInput = {
    update: XOR<UserUpdateWithoutCommentVotesInput, UserUncheckedUpdateWithoutCommentVotesInput>
    create: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentVotesInput, UserUncheckedUpdateWithoutCommentVotesInput>
  }

  export type UserUpdateWithoutCommentVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutVotesInput = {
    update: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutVotesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type CommentUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type PostCreateWithoutSavedInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSavedInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
    authorId: string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSavedInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSavedInput, PostUncheckedCreateWithoutSavedInput>
  }

  export type UserCreateWithoutSavedPostInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedComments?: SavedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
  }

  export type PostUpsertWithoutSavedInput = {
    update: XOR<PostUpdateWithoutSavedInput, PostUncheckedUpdateWithoutSavedInput>
    create: XOR<PostCreateWithoutSavedInput, PostUncheckedCreateWithoutSavedInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSavedInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSavedInput, PostUncheckedUpdateWithoutSavedInput>
  }

  export type PostUpdateWithoutSavedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSavedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutSavedPostInput = {
    update: XOR<UserUpdateWithoutSavedPostInput, UserUncheckedUpdateWithoutSavedPostInput>
    create: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedPostInput, UserUncheckedUpdateWithoutSavedPostInput>
  }

  export type UserUpdateWithoutSavedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateWithoutSavedInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentBy: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutSavedInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutSavedInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutSavedInput, CommentUncheckedCreateWithoutSavedInput>
  }

  export type UserCreateWithoutSavedCommentsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityCreateNestedManyWithoutCreatedByInput
    followed?: CommunityCreateNestedManyWithoutFollowersInput
    comments?: CommentCreateNestedManyWithoutCommentByInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCommentsInput = {
    id?: string
    email: string
    name: string
    username: string
    avatar?: string | null
    role?: $Enums.Role
    provider: string
    universityId?: string | null
    publicKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    communities?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    followed?: CommunityUncheckedCreateNestedManyWithoutFollowersInput
    comments?: CommentUncheckedCreateNestedManyWithoutCommentByInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCommentsInput, UserUncheckedCreateWithoutSavedCommentsInput>
  }

  export type CommentUpsertWithoutSavedInput = {
    update: XOR<CommentUpdateWithoutSavedInput, CommentUncheckedUpdateWithoutSavedInput>
    create: XOR<CommentCreateWithoutSavedInput, CommentUncheckedCreateWithoutSavedInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutSavedInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutSavedInput, CommentUncheckedUpdateWithoutSavedInput>
  }

  export type CommentUpdateWithoutSavedInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutSavedInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type UserUpsertWithoutSavedCommentsInput = {
    update: XOR<UserUpdateWithoutSavedCommentsInput, UserUncheckedUpdateWithoutSavedCommentsInput>
    create: XOR<UserCreateWithoutSavedCommentsInput, UserUncheckedCreateWithoutSavedCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedCommentsInput, UserUncheckedUpdateWithoutSavedCommentsInput>
  }

  export type UserUpdateWithoutSavedCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUpdateManyWithoutFollowersNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    followed?: CommunityUncheckedUpdateManyWithoutFollowersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityCreateManyCreatedByInput = {
    id?: string
    communityName: string
    description: string
    public?: boolean
    topics?: CommunityCreatetopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyCommentByInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    parentId?: string | null
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: string
  }

  export type PostVoteCreateManyUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    postId: string
  }

  export type CommentVoteCreateManyUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    commentId: string
  }

  export type SavedPostCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type SavedCommentsCreateManyUserInput = {
    id?: string
    commentId: string
    createdAt?: Date | string
  }

  export type CommunityUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: UserUpdateManyWithoutFollowedNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: UserUncheckedUpdateManyWithoutFollowedNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    topics?: CommunityUpdatetopicsInput | string[]
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutCommentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutCommentByInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    saved?: SavedPostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    saved?: SavedPostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateOneRequiredWithoutSavedNestedInput
  }

  export type SavedCommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyCommunityInput = {
    id?: string
    title: string
    body: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type UserUpdateWithoutFollowedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUpdateManyWithoutCommentByNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communities?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCommentByNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    savedComments?: SavedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: StringFieldUpdateOperationsInput | string
    universityId?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    saved?: SavedPostUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    saved?: SavedPostUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    parentId?: string | null
  }

  export type PostVoteCreateManyPostInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
  }

  export type SavedPostCreateManyPostsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostVoteUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostVotesNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentById: string
    postId: string
  }

  export type CommentVoteCreateManyCommentInput = {
    id?: string
    value: number
    createdAt?: Date | string
    userId: string
  }

  export type SavedCommentsCreateManyCommentsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
    saved?: SavedCommentsUncheckedUpdateManyWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentById?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedCommentsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCommentsNestedInput
  }

  export type SavedCommentsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedCommentsUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}