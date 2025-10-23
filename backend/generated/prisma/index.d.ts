
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
 * Model CV
 * 
 */
export type CV = $Result.DefaultSelection<Prisma.$CVPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>

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
   * `prisma.cV`: Exposes CRUD operations for the **CV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVS
    * const cVS = await prisma.cV.findMany()
    * ```
    */
  get cV(): Prisma.CVDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    CV: 'CV',
    Evaluation: 'Evaluation'
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
      modelProps: "user" | "cV" | "evaluation"
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
      CV: {
        payload: Prisma.$CVPayload<ExtArgs>
        fields: Prisma.CVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findFirst: {
            args: Prisma.CVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findMany: {
            args: Prisma.CVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          create: {
            args: Prisma.CVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          createMany: {
            args: Prisma.CVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          update: {
            args: Prisma.CVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          deleteMany: {
            args: Prisma.CVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          aggregate: {
            args: Prisma.CVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCV>
          }
          groupBy: {
            args: Prisma.CVGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVCountArgs<ExtArgs>
            result: $Utils.Optional<CVCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    cV?: CVOmit
    evaluation?: EvaluationOmit
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
    cvs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | UserCountOutputTypeCountCvsArgs
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
  export type UserCountOutputTypeCountCvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
  }


  /**
   * Count Type CVCountOutputType
   */

  export type CVCountOutputType = {
    evaluations: number
  }

  export type CVCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | CVCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVCountOutputType
     */
    select?: CVCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    cvs?: boolean | User$cvsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | User$cvsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cvs: Prisma.$CVPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date
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
    cvs<T extends User$cvsArgs<ExtArgs> = {}>(args?: Subset<T, User$cvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
   * User.cvs
   */
  export type User$cvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    where?: CVWhereInput
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    cursor?: CVWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
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
   * Model CV
   */

  export type AggregateCV = {
    _count: CVCountAggregateOutputType | null
    _avg: CVAvgAggregateOutputType | null
    _sum: CVSumAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  export type CVAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CVSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CVMinAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    textContent: string | null
    vectorId: string | null
    userId: number | null
    created_at: Date | null
  }

  export type CVMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    textContent: string | null
    vectorId: string | null
    userId: number | null
    created_at: Date | null
  }

  export type CVCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    textContent: number
    vectorId: number
    userId: number
    created_at: number
    _all: number
  }


  export type CVAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CVSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CVMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    textContent?: true
    vectorId?: true
    userId?: true
    created_at?: true
  }

  export type CVMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    textContent?: true
    vectorId?: true
    userId?: true
    created_at?: true
  }

  export type CVCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    textContent?: true
    vectorId?: true
    userId?: true
    created_at?: true
    _all?: true
  }

  export type CVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CV to aggregate.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVS
    **/
    _count?: true | CVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CVAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CVSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVMaxAggregateInputType
  }

  export type GetCVAggregateType<T extends CVAggregateArgs> = {
        [P in keyof T & keyof AggregateCV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCV[P]>
      : GetScalarType<T[P], AggregateCV[P]>
  }




  export type CVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
    orderBy?: CVOrderByWithAggregationInput | CVOrderByWithAggregationInput[]
    by: CVScalarFieldEnum[] | CVScalarFieldEnum
    having?: CVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVCountAggregateInputType | true
    _avg?: CVAvgAggregateInputType
    _sum?: CVSumAggregateInputType
    _min?: CVMinAggregateInputType
    _max?: CVMaxAggregateInputType
  }

  export type CVGroupByOutputType = {
    id: number
    filename: string
    originalName: string
    textContent: string | null
    vectorId: string | null
    userId: number
    created_at: Date
    _count: CVCountAggregateOutputType | null
    _avg: CVAvgAggregateOutputType | null
    _sum: CVSumAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  type GetCVGroupByPayload<T extends CVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVGroupByOutputType[P]>
            : GetScalarType<T[P], CVGroupByOutputType[P]>
        }
      >
    >


  export type CVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    textContent?: boolean
    vectorId?: boolean
    userId?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    evaluations?: boolean | CV$evaluationsArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>



  export type CVSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    textContent?: boolean
    vectorId?: boolean
    userId?: boolean
    created_at?: boolean
  }

  export type CVOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "originalName" | "textContent" | "vectorId" | "userId" | "created_at", ExtArgs["result"]["cV"]>
  export type CVInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    evaluations?: boolean | CV$evaluationsArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CV"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      originalName: string
      textContent: string | null
      vectorId: string | null
      userId: number
      created_at: Date
    }, ExtArgs["result"]["cV"]>
    composites: {}
  }

  type CVGetPayload<S extends boolean | null | undefined | CVDefaultArgs> = $Result.GetResult<Prisma.$CVPayload, S>

  type CVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVCountAggregateInputType | true
    }

  export interface CVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CV'], meta: { name: 'CV' } }
    /**
     * Find zero or one CV that matches the filter.
     * @param {CVFindUniqueArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVFindUniqueArgs>(args: SelectSubset<T, CVFindUniqueArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CV that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVFindUniqueOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVFindUniqueOrThrowArgs>(args: SelectSubset<T, CVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVFindFirstArgs>(args?: SelectSubset<T, CVFindFirstArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVFindFirstOrThrowArgs>(args?: SelectSubset<T, CVFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVS
     * const cVS = await prisma.cV.findMany()
     * 
     * // Get first 10 CVS
     * const cVS = await prisma.cV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVWithIdOnly = await prisma.cV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVFindManyArgs>(args?: SelectSubset<T, CVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CV.
     * @param {CVCreateArgs} args - Arguments to create a CV.
     * @example
     * // Create one CV
     * const CV = await prisma.cV.create({
     *   data: {
     *     // ... data to create a CV
     *   }
     * })
     * 
     */
    create<T extends CVCreateArgs>(args: SelectSubset<T, CVCreateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVS.
     * @param {CVCreateManyArgs} args - Arguments to create many CVS.
     * @example
     * // Create many CVS
     * const cV = await prisma.cV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVCreateManyArgs>(args?: SelectSubset<T, CVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CV.
     * @param {CVDeleteArgs} args - Arguments to delete one CV.
     * @example
     * // Delete one CV
     * const CV = await prisma.cV.delete({
     *   where: {
     *     // ... filter to delete one CV
     *   }
     * })
     * 
     */
    delete<T extends CVDeleteArgs>(args: SelectSubset<T, CVDeleteArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CV.
     * @param {CVUpdateArgs} args - Arguments to update one CV.
     * @example
     * // Update one CV
     * const cV = await prisma.cV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVUpdateArgs>(args: SelectSubset<T, CVUpdateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVS.
     * @param {CVDeleteManyArgs} args - Arguments to filter CVS to delete.
     * @example
     * // Delete a few CVS
     * const { count } = await prisma.cV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVDeleteManyArgs>(args?: SelectSubset<T, CVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVS
     * const cV = await prisma.cV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVUpdateManyArgs>(args: SelectSubset<T, CVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CV.
     * @param {CVUpsertArgs} args - Arguments to update or create a CV.
     * @example
     * // Update or create a CV
     * const cV = await prisma.cV.upsert({
     *   create: {
     *     // ... data to create a CV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CV we want to update
     *   }
     * })
     */
    upsert<T extends CVUpsertArgs>(args: SelectSubset<T, CVUpsertArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVCountArgs} args - Arguments to filter CVS to count.
     * @example
     * // Count the number of CVS
     * const count = await prisma.cV.count({
     *   where: {
     *     // ... the filter for the CVS we want to count
     *   }
     * })
    **/
    count<T extends CVCountArgs>(
      args?: Subset<T, CVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CVAggregateArgs>(args: Subset<T, CVAggregateArgs>): Prisma.PrismaPromise<GetCVAggregateType<T>>

    /**
     * Group by CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVGroupByArgs} args - Group by arguments.
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
      T extends CVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVGroupByArgs['orderBy'] }
        : { orderBy?: CVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CV model
   */
  readonly fields: CVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends CV$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, CV$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CV model
   */
  interface CVFieldRefs {
    readonly id: FieldRef<"CV", 'Int'>
    readonly filename: FieldRef<"CV", 'String'>
    readonly originalName: FieldRef<"CV", 'String'>
    readonly textContent: FieldRef<"CV", 'String'>
    readonly vectorId: FieldRef<"CV", 'String'>
    readonly userId: FieldRef<"CV", 'Int'>
    readonly created_at: FieldRef<"CV", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CV findUnique
   */
  export type CVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findUniqueOrThrow
   */
  export type CVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findFirst
   */
  export type CVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findFirstOrThrow
   */
  export type CVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findMany
   */
  export type CVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CVS to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV create
   */
  export type CVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to create a CV.
     */
    data: XOR<CVCreateInput, CVUncheckedCreateInput>
  }

  /**
   * CV createMany
   */
  export type CVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVS.
     */
    data: CVCreateManyInput | CVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CV update
   */
  export type CVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to update a CV.
     */
    data: XOR<CVUpdateInput, CVUncheckedUpdateInput>
    /**
     * Choose, which CV to update.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV updateMany
   */
  export type CVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVS.
     */
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyInput>
    /**
     * Filter which CVS to update
     */
    where?: CVWhereInput
    /**
     * Limit how many CVS to update.
     */
    limit?: number
  }

  /**
   * CV upsert
   */
  export type CVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The filter to search for the CV to update in case it exists.
     */
    where: CVWhereUniqueInput
    /**
     * In case the CV found by the `where` argument doesn't exist, create a new CV with this data.
     */
    create: XOR<CVCreateInput, CVUncheckedCreateInput>
    /**
     * In case the CV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVUpdateInput, CVUncheckedUpdateInput>
  }

  /**
   * CV delete
   */
  export type CVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter which CV to delete.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV deleteMany
   */
  export type CVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVS to delete
     */
    where?: CVWhereInput
    /**
     * Limit how many CVS to delete.
     */
    limit?: number
  }

  /**
   * CV.evaluations
   */
  export type CV$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * CV without action
   */
  export type CVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    id: number | null
    cvId: number | null
    matchScore: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    id: number | null
    cvId: number | null
    matchScore: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: number | null
    cvId: number | null
    matchScore: number | null
    suggestion: string | null
    created_at: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: number | null
    cvId: number | null
    matchScore: number | null
    suggestion: string | null
    created_at: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    cvId: number
    matchScore: number
    strengths: number
    weaknesses: number
    suggestion: number
    rawResponse: number
    created_at: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    id?: true
    cvId?: true
    matchScore?: true
  }

  export type EvaluationSumAggregateInputType = {
    id?: true
    cvId?: true
    matchScore?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    cvId?: true
    matchScore?: true
    suggestion?: true
    created_at?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    cvId?: true
    matchScore?: true
    suggestion?: true
    created_at?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    cvId?: true
    matchScore?: true
    strengths?: true
    weaknesses?: true
    suggestion?: true
    rawResponse?: true
    created_at?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: number
    cvId: number
    matchScore: number
    strengths: JsonValue | null
    weaknesses: JsonValue | null
    suggestion: string
    rawResponse: JsonValue | null
    created_at: Date
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cvId?: boolean
    matchScore?: boolean
    strengths?: boolean
    weaknesses?: boolean
    suggestion?: boolean
    rawResponse?: boolean
    created_at?: boolean
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>



  export type EvaluationSelectScalar = {
    id?: boolean
    cvId?: boolean
    matchScore?: boolean
    strengths?: boolean
    weaknesses?: boolean
    suggestion?: boolean
    rawResponse?: boolean
    created_at?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cvId" | "matchScore" | "strengths" | "weaknesses" | "suggestion" | "rawResponse" | "created_at", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cv?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      cv: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cvId: number
      matchScore: number
      strengths: Prisma.JsonValue | null
      weaknesses: Prisma.JsonValue | null
      suggestion: string
      rawResponse: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cv<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'Int'>
    readonly cvId: FieldRef<"Evaluation", 'Int'>
    readonly matchScore: FieldRef<"Evaluation", 'Float'>
    readonly strengths: FieldRef<"Evaluation", 'Json'>
    readonly weaknesses: FieldRef<"Evaluation", 'Json'>
    readonly suggestion: FieldRef<"Evaluation", 'String'>
    readonly rawResponse: FieldRef<"Evaluation", 'Json'>
    readonly created_at: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CVScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    textContent: 'textContent',
    vectorId: 'vectorId',
    userId: 'userId',
    created_at: 'created_at'
  };

  export type CVScalarFieldEnum = (typeof CVScalarFieldEnum)[keyof typeof CVScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    cvId: 'cvId',
    matchScore: 'matchScore',
    strengths: 'strengths',
    weaknesses: 'weaknesses',
    suggestion: 'suggestion',
    rawResponse: 'rawResponse',
    created_at: 'created_at'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CVOrderByRelevanceFieldEnum: {
    filename: 'filename',
    originalName: 'originalName',
    textContent: 'textContent',
    vectorId: 'vectorId'
  };

  export type CVOrderByRelevanceFieldEnum = (typeof CVOrderByRelevanceFieldEnum)[keyof typeof CVOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const EvaluationOrderByRelevanceFieldEnum: {
    suggestion: 'suggestion'
  };

  export type EvaluationOrderByRelevanceFieldEnum = (typeof EvaluationOrderByRelevanceFieldEnum)[keyof typeof EvaluationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    cvs?: CVListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    cvs?: CVOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    cvs?: CVListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CVWhereInput = {
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    id?: IntFilter<"CV"> | number
    filename?: StringFilter<"CV"> | string
    originalName?: StringFilter<"CV"> | string
    textContent?: StringNullableFilter<"CV"> | string | null
    vectorId?: StringNullableFilter<"CV"> | string | null
    userId?: IntFilter<"CV"> | number
    created_at?: DateTimeFilter<"CV"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluations?: EvaluationListRelationFilter
  }

  export type CVOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    textContent?: SortOrderInput | SortOrder
    vectorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    _relevance?: CVOrderByRelevanceInput
  }

  export type CVWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    filename?: StringFilter<"CV"> | string
    originalName?: StringFilter<"CV"> | string
    textContent?: StringNullableFilter<"CV"> | string | null
    vectorId?: StringNullableFilter<"CV"> | string | null
    userId?: IntFilter<"CV"> | number
    created_at?: DateTimeFilter<"CV"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluations?: EvaluationListRelationFilter
  }, "id">

  export type CVOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    textContent?: SortOrderInput | SortOrder
    vectorId?: SortOrderInput | SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    _count?: CVCountOrderByAggregateInput
    _avg?: CVAvgOrderByAggregateInput
    _max?: CVMaxOrderByAggregateInput
    _min?: CVMinOrderByAggregateInput
    _sum?: CVSumOrderByAggregateInput
  }

  export type CVScalarWhereWithAggregatesInput = {
    AND?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    OR?: CVScalarWhereWithAggregatesInput[]
    NOT?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CV"> | number
    filename?: StringWithAggregatesFilter<"CV"> | string
    originalName?: StringWithAggregatesFilter<"CV"> | string
    textContent?: StringNullableWithAggregatesFilter<"CV"> | string | null
    vectorId?: StringNullableWithAggregatesFilter<"CV"> | string | null
    userId?: IntWithAggregatesFilter<"CV"> | number
    created_at?: DateTimeWithAggregatesFilter<"CV"> | Date | string
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    cvId?: IntFilter<"Evaluation"> | number
    matchScore?: FloatFilter<"Evaluation"> | number
    strengths?: JsonNullableFilter<"Evaluation">
    weaknesses?: JsonNullableFilter<"Evaluation">
    suggestion?: StringFilter<"Evaluation"> | string
    rawResponse?: JsonNullableFilter<"Evaluation">
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
    cv?: XOR<CVScalarRelationFilter, CVWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
    strengths?: SortOrderInput | SortOrder
    weaknesses?: SortOrderInput | SortOrder
    suggestion?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    created_at?: SortOrder
    cv?: CVOrderByWithRelationInput
    _relevance?: EvaluationOrderByRelevanceInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    cvId?: IntFilter<"Evaluation"> | number
    matchScore?: FloatFilter<"Evaluation"> | number
    strengths?: JsonNullableFilter<"Evaluation">
    weaknesses?: JsonNullableFilter<"Evaluation">
    suggestion?: StringFilter<"Evaluation"> | string
    rawResponse?: JsonNullableFilter<"Evaluation">
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
    cv?: XOR<CVScalarRelationFilter, CVWhereInput>
  }, "id">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
    strengths?: SortOrderInput | SortOrder
    weaknesses?: SortOrderInput | SortOrder
    suggestion?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evaluation"> | number
    cvId?: IntWithAggregatesFilter<"Evaluation"> | number
    matchScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    strengths?: JsonNullableWithAggregatesFilter<"Evaluation">
    weaknesses?: JsonNullableWithAggregatesFilter<"Evaluation">
    suggestion?: StringWithAggregatesFilter<"Evaluation"> | string
    rawResponse?: JsonNullableWithAggregatesFilter<"Evaluation">
    created_at?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    cvs?: CVCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    cvs?: CVUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvs?: CVUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVCreateInput = {
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCvsInput
    evaluations?: EvaluationCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateInput = {
    id?: number
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    userId: number
    created_at?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
    evaluations?: EvaluationUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVCreateManyInput = {
    id?: number
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    userId: number
    created_at?: Date | string
  }

  export type CVUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateInput = {
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    cv: CVCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: number
    cvId: number
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type EvaluationUpdateInput = {
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cv?: CVUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cvId?: IntFieldUpdateOperationsInput | number
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyInput = {
    id?: number
    cvId: number
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type EvaluationUpdateManyMutationInput = {
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cvId?: IntFieldUpdateOperationsInput | number
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CVListRelationFilter = {
    every?: CVWhereInput
    some?: CVWhereInput
    none?: CVWhereInput
  }

  export type CVOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVOrderByRelevanceInput = {
    fields: CVOrderByRelevanceFieldEnum | CVOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    textContent?: SortOrder
    vectorId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type CVAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CVMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    textContent?: SortOrder
    vectorId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type CVMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    textContent?: SortOrder
    vectorId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type CVSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CVScalarRelationFilter = {
    is?: CVWhereInput
    isNot?: CVWhereInput
  }

  export type EvaluationOrderByRelevanceInput = {
    fields: EvaluationOrderByRelevanceFieldEnum | EvaluationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    suggestion?: SortOrder
    rawResponse?: SortOrder
    created_at?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
    suggestion?: SortOrder
    created_at?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
    suggestion?: SortOrder
    created_at?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    id?: SortOrder
    cvId?: SortOrder
    matchScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CVCreateNestedManyWithoutUserInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type CVUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CVUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutUserInput | CVUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutUserInput | CVUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVUpdateManyWithWhereWithoutUserInput | CVUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CVUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput> | CVCreateWithoutUserInput[] | CVUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVCreateOrConnectWithoutUserInput | CVCreateOrConnectWithoutUserInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutUserInput | CVUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVCreateManyUserInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutUserInput | CVUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVUpdateManyWithWhereWithoutUserInput | CVUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCvsInput = {
    create?: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput
    connect?: UserWhereUniqueInput
  }

  export type EvaluationCreateNestedManyWithoutCvInput = {
    create?: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput> | EvaluationCreateWithoutCvInput[] | EvaluationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCvInput | EvaluationCreateOrConnectWithoutCvInput[]
    createMany?: EvaluationCreateManyCvInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutCvInput = {
    create?: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput> | EvaluationCreateWithoutCvInput[] | EvaluationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCvInput | EvaluationCreateOrConnectWithoutCvInput[]
    createMany?: EvaluationCreateManyCvInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCvsNestedInput = {
    create?: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput
    upsert?: UserUpsertWithoutCvsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCvsInput, UserUpdateWithoutCvsInput>, UserUncheckedUpdateWithoutCvsInput>
  }

  export type EvaluationUpdateManyWithoutCvNestedInput = {
    create?: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput> | EvaluationCreateWithoutCvInput[] | EvaluationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCvInput | EvaluationCreateOrConnectWithoutCvInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCvInput | EvaluationUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: EvaluationCreateManyCvInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCvInput | EvaluationUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCvInput | EvaluationUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutCvNestedInput = {
    create?: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput> | EvaluationCreateWithoutCvInput[] | EvaluationUncheckedCreateWithoutCvInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCvInput | EvaluationCreateOrConnectWithoutCvInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCvInput | EvaluationUpsertWithWhereUniqueWithoutCvInput[]
    createMany?: EvaluationCreateManyCvInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCvInput | EvaluationUpdateWithWhereUniqueWithoutCvInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCvInput | EvaluationUpdateManyWithWhereWithoutCvInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type CVCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<CVCreateWithoutEvaluationsInput, CVUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CVCreateOrConnectWithoutEvaluationsInput
    connect?: CVWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CVUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<CVCreateWithoutEvaluationsInput, CVUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CVCreateOrConnectWithoutEvaluationsInput
    upsert?: CVUpsertWithoutEvaluationsInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutEvaluationsInput, CVUpdateWithoutEvaluationsInput>, CVUncheckedUpdateWithoutEvaluationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CVCreateWithoutUserInput = {
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    created_at?: Date | string
    evaluations?: EvaluationCreateNestedManyWithoutCvInput
  }

  export type CVUncheckedCreateWithoutUserInput = {
    id?: number
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    created_at?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCvInput
  }

  export type CVCreateOrConnectWithoutUserInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput>
  }

  export type CVCreateManyUserInputEnvelope = {
    data: CVCreateManyUserInput | CVCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CVUpsertWithWhereUniqueWithoutUserInput = {
    where: CVWhereUniqueInput
    update: XOR<CVUpdateWithoutUserInput, CVUncheckedUpdateWithoutUserInput>
    create: XOR<CVCreateWithoutUserInput, CVUncheckedCreateWithoutUserInput>
  }

  export type CVUpdateWithWhereUniqueWithoutUserInput = {
    where: CVWhereUniqueInput
    data: XOR<CVUpdateWithoutUserInput, CVUncheckedUpdateWithoutUserInput>
  }

  export type CVUpdateManyWithWhereWithoutUserInput = {
    where: CVScalarWhereInput
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyWithoutUserInput>
  }

  export type CVScalarWhereInput = {
    AND?: CVScalarWhereInput | CVScalarWhereInput[]
    OR?: CVScalarWhereInput[]
    NOT?: CVScalarWhereInput | CVScalarWhereInput[]
    id?: IntFilter<"CV"> | number
    filename?: StringFilter<"CV"> | string
    originalName?: StringFilter<"CV"> | string
    textContent?: StringNullableFilter<"CV"> | string | null
    vectorId?: StringNullableFilter<"CV"> | string | null
    userId?: IntFilter<"CV"> | number
    created_at?: DateTimeFilter<"CV"> | Date | string
  }

  export type UserCreateWithoutCvsInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutCvsInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutCvsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
  }

  export type EvaluationCreateWithoutCvInput = {
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type EvaluationUncheckedCreateWithoutCvInput = {
    id?: number
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutCvInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput>
  }

  export type EvaluationCreateManyCvInputEnvelope = {
    data: EvaluationCreateManyCvInput | EvaluationCreateManyCvInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCvsInput = {
    update: XOR<UserUpdateWithoutCvsInput, UserUncheckedUpdateWithoutCvsInput>
    create: XOR<UserCreateWithoutCvsInput, UserUncheckedCreateWithoutCvsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCvsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCvsInput, UserUncheckedUpdateWithoutCvsInput>
  }

  export type UserUpdateWithoutCvsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCvsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutCvInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutCvInput, EvaluationUncheckedUpdateWithoutCvInput>
    create: XOR<EvaluationCreateWithoutCvInput, EvaluationUncheckedCreateWithoutCvInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutCvInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutCvInput, EvaluationUncheckedUpdateWithoutCvInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutCvInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutCvInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    cvId?: IntFilter<"Evaluation"> | number
    matchScore?: FloatFilter<"Evaluation"> | number
    strengths?: JsonNullableFilter<"Evaluation">
    weaknesses?: JsonNullableFilter<"Evaluation">
    suggestion?: StringFilter<"Evaluation"> | string
    rawResponse?: JsonNullableFilter<"Evaluation">
    created_at?: DateTimeFilter<"Evaluation"> | Date | string
  }

  export type CVCreateWithoutEvaluationsInput = {
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCvsInput
  }

  export type CVUncheckedCreateWithoutEvaluationsInput = {
    id?: number
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    userId: number
    created_at?: Date | string
  }

  export type CVCreateOrConnectWithoutEvaluationsInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutEvaluationsInput, CVUncheckedCreateWithoutEvaluationsInput>
  }

  export type CVUpsertWithoutEvaluationsInput = {
    update: XOR<CVUpdateWithoutEvaluationsInput, CVUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<CVCreateWithoutEvaluationsInput, CVUncheckedCreateWithoutEvaluationsInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutEvaluationsInput, CVUncheckedUpdateWithoutEvaluationsInput>
  }

  export type CVUpdateWithoutEvaluationsInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCvsNestedInput
  }

  export type CVUncheckedUpdateWithoutEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVCreateManyUserInput = {
    id?: number
    filename: string
    originalName: string
    textContent?: string | null
    vectorId?: string | null
    created_at?: Date | string
  }

  export type CVUpdateWithoutUserInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCvNestedInput
  }

  export type CVUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    vectorId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyCvInput = {
    id?: number
    matchScore: number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type EvaluationUpdateWithoutCvInput = {
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutCvInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchScore?: FloatFieldUpdateOperationsInput | number
    strengths?: NullableJsonNullValueInput | InputJsonValue
    weaknesses?: NullableJsonNullValueInput | InputJsonValue
    suggestion?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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