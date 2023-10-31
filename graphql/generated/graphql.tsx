import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Action = {
  __typename?: 'Action';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level?: Maybe<Scalars['String']>;
  pronounceKana?: Maybe<Scalars['String']>;
  pronounceScore?: Maybe<Scalars['Int']>;
  pronounceWord?: Maybe<Scalars['String']>;
  scene?: Maybe<Scene>;
  sceneId?: Maybe<Scalars['String']>;
  sceneMessages: Array<SceneMessage>;
  status?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ActionResponse = {
  __typename?: 'ActionResponse';
  action?: Maybe<Action>;
  errors?: Maybe<Array<FieldError>>;
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  errors?: Maybe<Array<FieldError>>;
  value?: Maybe<Scalars['Boolean']>;
};

export type CreatePronounceActionInputForResolver = {
  pronounceKana: Scalars['String'];
  pronounceWord: Scalars['String'];
};

export type CreateSceneActionInput = {
  sceneId: Scalars['String'];
  sceneMessageIds: Array<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CreateSceneInput = {
  challenges: Array<Scalars['String']>;
  description: Scalars['String'];
  emoji: Scalars['String'];
  goal: Scalars['String'];
  startJson: GptJsonResponseInput;
  systemPrompt: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSceneMessageInput = {
  messageLog: MessageLogInput;
  sceneSessionId: Scalars['String'];
};

export type CreateSceneSessionInput = {
  sceneId: Scalars['String'];
};

export type CreateTutorMessageInput = {
  messageLog: MessageLogInput;
  tutorId: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type ExampleItem = {
  __typename?: 'ExampleItem';
  assistant?: Maybe<ExampleResponse>;
  user?: Maybe<ExampleResponse>;
};

export type ExampleResponse = {
  __typename?: 'ExampleResponse';
  content: Scalars['String'];
  isComplete: Scalars['Boolean'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GptJsonResponse = {
  __typename?: 'GptJSONResponse';
  isComplete: Scalars['Boolean'];
  text: Scalars['String'];
};

export type GptJsonResponseInput = {
  isComplete: Scalars['Boolean'];
  text: Scalars['String'];
};

export type GptResponse = {
  __typename?: 'GptResponse';
  errors?: Maybe<Array<FieldError>>;
  logGptResponse?: Maybe<MessageLogJsonResponse>;
};

export type Kuromoji = {
  __typename?: 'Kuromoji';
  basic_form: Scalars['String'];
  conjugated_form: Scalars['String'];
  conjugated_type: Scalars['String'];
  pos: Scalars['String'];
  pos_detail_1: Scalars['String'];
  pos_detail_2: Scalars['String'];
  pos_detail_3: Scalars['String'];
  pronunciation: Scalars['String'];
  reading: Scalars['String'];
  surface_form: Scalars['String'];
  word_id: Scalars['Float'];
  word_position: Scalars['Float'];
  word_type: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MessageLog = {
  __typename?: 'MessageLog';
  content: Scalars['String'];
  morpho?: Maybe<Array<MorPho>>;
  role: Scalars['String'];
};

export type MessageLogInput = {
  content: Scalars['String'];
  role: Scalars['String'];
};

export type MessageLogJsonResponse = {
  __typename?: 'MessageLogJSONResponse';
  jsonResponse: GptJsonResponse;
  role: Scalars['String'];
};

export type MessageLogResponse = {
  __typename?: 'MessageLogResponse';
  errors?: Maybe<Array<FieldError>>;
  messageLog?: Maybe<MessageLog>;
};

export type MorPho = {
  __typename?: 'MorPho';
  basic_form: Scalars['String'];
  surface_form: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  appleLogIn: UserResponse;
  completePronounceDeck: ActionResponse;
  createScene: SceneResponse;
  createSceneAction: ActionResponse;
  createSceneMessage: SceneMessageResponse;
  createSceneSession: SceneSessionResponse;
  createTutor: TutorResponse;
  createTutorMessage: TutorMessageResponse;
  deleteUser: BooleanResponse;
  getAuthURL: Scalars['String'];
  googleLogIn: UserResponse;
  guestLogin: UserResponse;
  login: UserResponse;
  logout: BooleanResponse;
  register: UserResponse;
  removeAction: Action;
  removeScene: Scene;
  removeSceneMessage: SceneMessage;
  removeSceneSession: SceneSession;
  removeTutor: Tutor;
  removeTutorMessage: TutorMessage;
  textToSpeech: SpeechFile;
  textToSpeechJpEn: SpeechFile;
  updateAction: Action;
  updateScene: Scene;
  updateSceneMessage: SceneMessage;
  updateSceneSession: SceneSession;
  updateTutorMessages: TutorResponse;
};


export type MutationAppleLogInArgs = {
  token: Scalars['String'];
};


export type MutationCompletePronounceDeckArgs = {
  level: Scalars['String'];
};


export type MutationCreateSceneArgs = {
  input: CreateSceneInput;
};


export type MutationCreateSceneActionArgs = {
  input: CreateSceneActionInput;
};


export type MutationCreateSceneMessageArgs = {
  input: CreateSceneMessageInput;
};


export type MutationCreateSceneSessionArgs = {
  input: CreateSceneSessionInput;
};


export type MutationCreateTutorMessageArgs = {
  input: CreateTutorMessageInput;
};


export type MutationGoogleLogInArgs = {
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationRemoveActionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSceneArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSceneMessageArgs = {
  id: Scalars['String'];
};


export type MutationRemoveSceneSessionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTutorArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTutorMessageArgs = {
  id: Scalars['String'];
};


export type MutationTextToSpeechArgs = {
  input: TextToSpeechInput;
};


export type MutationTextToSpeechJpEnArgs = {
  input: TextToSpeechInput;
};


export type MutationUpdateActionArgs = {
  input: UpdateActionInput;
};


export type MutationUpdateSceneArgs = {
  input: UpdateSceneInput;
};


export type MutationUpdateSceneMessageArgs = {
  input: UpdateSceneMessageInput;
};


export type MutationUpdateSceneSessionArgs = {
  updateSceneSessionInput: UpdateSceneSessionInput;
};


export type MutationUpdateTutorMessagesArgs = {
  id: Scalars['String'];
  messages: Array<MessageLogInput>;
};

export type Query = {
  __typename?: 'Query';
  SceneMessage: SceneMessage;
  SceneMessages: Array<SceneMessage>;
  action: Action;
  canUseTutor?: Maybe<Scalars['Boolean']>;
  countToken?: Maybe<Scalars['Int']>;
  me?: Maybe<User>;
  myActions: Array<Action>;
  myCompletePronounceActions: Array<Action>;
  myLatestPronounceActionByWord: Action;
  myTutor: Tutor;
  scene: Scene;
  sceneReply?: Maybe<GptResponse>;
  sceneSession: SceneSession;
  scenes: Array<Scene>;
  testAnalyzeMorpho: Array<Kuromoji>;
  toggleTranslateJpEn: ValueResponse;
  translate: ValueResponse;
  tutorMessage: TutorMessage;
  tutorMessages: Array<TutorMessage>;
  tutorReply?: Maybe<MessageLogResponse>;
  tutors: Array<Tutor>;
  user: User;
  users: Array<User>;
  vocab: Vocab;
};


export type QuerySceneMessageArgs = {
  id: Scalars['String'];
};


export type QuerySceneMessagesArgs = {
  tutorId: Scalars['String'];
};


export type QueryActionArgs = {
  id: Scalars['Int'];
};


export type QueryCanUseTutorArgs = {
  input: Array<MessageLogInput>;
};


export type QueryCountTokenArgs = {
  text: Scalars['String'];
};


export type QueryMyLatestPronounceActionByWordArgs = {
  input: CreatePronounceActionInputForResolver;
};


export type QuerySceneArgs = {
  id: Scalars['String'];
};


export type QuerySceneReplyArgs = {
  input: Array<MessageLogInput>;
  sceneId: Scalars['String'];
};


export type QuerySceneSessionArgs = {
  id: Scalars['String'];
};


export type QueryToggleTranslateJpEnArgs = {
  input: TranslateInput;
};


export type QueryTranslateArgs = {
  input: TranslateInput;
};


export type QueryTutorMessageArgs = {
  id: Scalars['String'];
};


export type QueryTutorMessagesArgs = {
  tutorId: Scalars['String'];
};


export type QueryTutorReplyArgs = {
  input: Array<MessageLogInput>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryVocabArgs = {
  word: Scalars['String'];
};

export type Scene = {
  __typename?: 'Scene';
  assistantRole: Scalars['String'];
  challenges: Array<Scalars['String']>;
  combinedSystemPrompt: Scalars['String'];
  createdAt: Scalars['DateTime'];
  day: Scalars['Float'];
  description: Scalars['String'];
  details: Array<Scalars['String']>;
  emoji: Scalars['String'];
  examples: Array<Array<ExampleItem>>;
  goal: Scalars['String'];
  id: Scalars['ID'];
  isComplete: Scalars['Boolean'];
  isProFeature: Scalars['Boolean'];
  level: Scalars['Float'];
  previewSystemPrompt: Scalars['String'];
  sceneMessages: Array<SceneMessage>;
  sceneSessions: Array<SceneSession>;
  situation: Scalars['String'];
  startJson: GptJsonResponse;
  subLevel: Scalars['Float'];
  systemPrompt: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userConnections: Array<Action>;
  userRole: Scalars['String'];
};

export type SceneMessage = {
  __typename?: 'SceneMessage';
  action?: Maybe<Action>;
  actionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageLog: MessageLog;
  scene?: Maybe<Scene>;
  sceneId?: Maybe<Scalars['String']>;
  sceneSession?: Maybe<Action>;
  sceneSessionId: Scalars['String'];
  speechFile?: Maybe<SpeechFile>;
  updatedAt: Scalars['DateTime'];
};

export type SceneMessageResponse = {
  __typename?: 'SceneMessageResponse';
  errors?: Maybe<Array<FieldError>>;
  sceneMessage?: Maybe<SceneMessage>;
};

export type SceneResponse = {
  __typename?: 'SceneResponse';
  errors?: Maybe<Array<FieldError>>;
  scene?: Maybe<Scene>;
};

export type SceneSession = {
  __typename?: 'SceneSession';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  scene: User;
  sceneId: Scalars['String'];
  sceneMessages: Array<SceneMessage>;
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: User;
};

export type SceneSessionResponse = {
  __typename?: 'SceneSessionResponse';
  errors?: Maybe<Array<FieldError>>;
  sceneSession?: Maybe<SceneSession>;
};

export type SpeechFile = {
  __typename?: 'SpeechFile';
  relativePath: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type SpeechFileInput = {
  relativePath: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type TextToSpeechInput = {
  sceneMessageId?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  tutorMessageId?: InputMaybe<Scalars['String']>;
};

export type TranslateInput = {
  targetLang?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type Tutor = {
  __typename?: 'Tutor';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  tutorMessages: Array<TutorMessage>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type TutorMessage = {
  __typename?: 'TutorMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageLog: MessageLog;
  speechFile?: Maybe<SpeechFile>;
  tutor?: Maybe<Tutor>;
  tutorId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TutorMessageResponse = {
  __typename?: 'TutorMessageResponse';
  errors?: Maybe<Array<FieldError>>;
  tutorMessage?: Maybe<TutorMessage>;
};

export type TutorResponse = {
  __typename?: 'TutorResponse';
  errors?: Maybe<Array<FieldError>>;
  tutor?: Maybe<Tutor>;
};

export type UpdateActionInput = {
  id: Scalars['Int'];
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateSceneInput = {
  challenges?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  goal?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  startJson?: InputMaybe<GptJsonResponseInput>;
  systemPrompt?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSceneMessageInput = {
  actionId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  messageLog?: InputMaybe<MessageLogInput>;
  sceneSessionId?: InputMaybe<Scalars['String']>;
  speechFile?: InputMaybe<SpeechFileInput>;
};

export type UpdateSceneSessionInput = {
  id: Scalars['Int'];
  sceneId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isGuest: Scalars['Boolean'];
  membership: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  photoUrl: Scalars['String'];
  sceneSessions: Array<SceneSession>;
  tutor?: Maybe<Tutor>;
  typeConnections: Array<Action>;
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type ValueResponse = {
  __typename?: 'ValueResponse';
  errors?: Maybe<Array<FieldError>>;
  value?: Maybe<Scalars['String']>;
};

export type Vocab = {
  __typename?: 'Vocab';
  accent?: Maybe<Scalars['String']>;
  audUrl?: Maybe<Scalars['String']>;
  eng?: Maybe<Scalars['String']>;
  exampleField?: Maybe<Scalars['Float']>;
  frequency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  kana?: Maybe<Scalars['String']>;
  morae?: Maybe<Scalars['String']>;
  pos?: Maybe<Scalars['String']>;
  romaji?: Maybe<Scalars['String']>;
  sentence?: Maybe<Scalars['String']>;
  sentenceAudUrl?: Maybe<Scalars['String']>;
  sentenceEng?: Maybe<Scalars['String']>;
  sentenceKana?: Maybe<Scalars['String']>;
  word?: Maybe<Scalars['String']>;
};

export type CompletePronounceDeckMutationVariables = Exact<{
  level: Scalars['String'];
}>;


export type CompletePronounceDeckMutation = { __typename?: 'Mutation', completePronounceDeck: { __typename?: 'ActionResponse', action?: { __typename?: 'Action', id: string, userId: string, sceneId?: string | null, type: string, status?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreateSceneActionMutationVariables = Exact<{
  input: CreateSceneActionInput;
}>;


export type CreateSceneActionMutation = { __typename?: 'Mutation', createSceneAction: { __typename?: 'ActionResponse', action?: { __typename?: 'Action', id: string, userId: string, sceneId?: string | null, type: string, status?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MyActionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyActionsQuery = { __typename?: 'Query', myActions: Array<{ __typename?: 'Action', id: string, userId: string, sceneId?: string | null, type: string, status?: string | null, createdAt: any, scene?: { __typename?: 'Scene', title: string, description: string, emoji: string } | null }> };

export type MyCompletePronounceActionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCompletePronounceActionsQuery = { __typename?: 'Query', myCompletePronounceActions: Array<{ __typename?: 'Action', id: string, status?: string | null, type: string, level?: string | null }> };

export type MyLatestPronounceActionByWordQueryVariables = Exact<{
  input: CreatePronounceActionInputForResolver;
}>;


export type MyLatestPronounceActionByWordQuery = { __typename?: 'Query', myLatestPronounceActionByWord: { __typename?: 'Action', id: string, pronounceScore?: number | null, pronounceWord?: string | null, pronounceKana?: string | null } };

export type AppleLogInMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type AppleLogInMutation = { __typename?: 'Mutation', appleLogIn: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type GoogleLogInMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type GoogleLogInMutation = { __typename?: 'Mutation', googleLogIn: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type GuestLoginMutationVariables = Exact<{ [key: string]: never; }>;


export type GuestLoginMutation = { __typename?: 'Mutation', guestLogin: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'BooleanResponse', value?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null };

export type RegisterMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null };

export type TextToSpeechMutationVariables = Exact<{
  input: TextToSpeechInput;
}>;


export type TextToSpeechMutation = { __typename?: 'Mutation', textToSpeech: { __typename?: 'SpeechFile', relativePath: string, url?: string | null } };

export type TextToSpeechJpEnMutationVariables = Exact<{
  input: TextToSpeechInput;
}>;


export type TextToSpeechJpEnMutation = { __typename?: 'Mutation', textToSpeechJpEn: { __typename?: 'SpeechFile', relativePath: string, url?: string | null } };

export type CanUseTutorQueryVariables = Exact<{
  input: Array<MessageLogInput> | MessageLogInput;
}>;


export type CanUseTutorQuery = { __typename?: 'Query', canUseTutor?: boolean | null };

export type SceneReplyQueryVariables = Exact<{
  sceneId: Scalars['String'];
  input: Array<MessageLogInput> | MessageLogInput;
}>;


export type SceneReplyQuery = { __typename?: 'Query', sceneReply?: { __typename?: 'GptResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, logGptResponse?: { __typename?: 'MessageLogJSONResponse', role: string, jsonResponse: { __typename?: 'GptJSONResponse', text: string, isComplete: boolean } } | null } | null };

export type TutorReplyQueryVariables = Exact<{
  input: Array<MessageLogInput> | MessageLogInput;
}>;


export type TutorReplyQuery = { __typename?: 'Query', tutorReply?: { __typename?: 'MessageLogResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, messageLog?: { __typename?: 'MessageLog', role: string, content: string, morpho?: Array<{ __typename?: 'MorPho', surface_form: string, basic_form: string }> | null } | null } | null };

export type CreateSceneMessageMutationVariables = Exact<{
  input: CreateSceneMessageInput;
}>;


export type CreateSceneMessageMutation = { __typename?: 'Mutation', createSceneMessage: { __typename?: 'SceneMessageResponse', sceneMessage?: { __typename?: 'SceneMessage', id: string, messageLog: { __typename?: 'MessageLog', content: string, role: string } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type CreateSceneSessionMutationVariables = Exact<{
  input: CreateSceneSessionInput;
}>;


export type CreateSceneSessionMutation = { __typename?: 'Mutation', createSceneSession: { __typename?: 'SceneSessionResponse', sceneSession?: { __typename?: 'SceneSession', id: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SceneSessionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SceneSessionQuery = { __typename?: 'Query', sceneSession: { __typename?: 'SceneSession', id: string, status: string, sceneMessages: Array<{ __typename?: 'SceneMessage', id: string, speechFile?: { __typename?: 'SpeechFile', url?: string | null, relativePath: string } | null, messageLog: { __typename?: 'MessageLog', role: string, content: string, morpho?: Array<{ __typename?: 'MorPho', surface_form: string, basic_form: string }> | null } }> } };

export type CreateSceneMutationVariables = Exact<{
  input: CreateSceneInput;
}>;


export type CreateSceneMutation = { __typename?: 'Mutation', createScene: { __typename?: 'SceneResponse', scene?: { __typename?: 'Scene', id: string, title: string, description: string, goal: string, challenges: Array<string>, systemPrompt: string, emoji: string, isProFeature: boolean, level: number, subLevel: number } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SceneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SceneQuery = { __typename?: 'Query', scene: { __typename?: 'Scene', id: string, title: string, description: string, goal: string, challenges: Array<string>, systemPrompt: string, combinedSystemPrompt: string, isProFeature: boolean, isComplete: boolean, emoji: string, level: number, subLevel: number, startJson: { __typename?: 'GptJSONResponse', text: string, isComplete: boolean } } };

export type ScenesQueryVariables = Exact<{ [key: string]: never; }>;


export type ScenesQuery = { __typename?: 'Query', scenes: Array<{ __typename?: 'Scene', id: string, title: string, description: string, goal: string, challenges: Array<string>, systemPrompt: string, isProFeature: boolean, isComplete: boolean, emoji: string, level: number, subLevel: number, day: number, startJson: { __typename?: 'GptJSONResponse', text: string, isComplete: boolean } }> };

export type ToggleTranslateJpEnQueryVariables = Exact<{
  input: TranslateInput;
}>;


export type ToggleTranslateJpEnQuery = { __typename?: 'Query', toggleTranslateJpEn: { __typename?: 'ValueResponse', value?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type TranslateQueryVariables = Exact<{
  input: TranslateInput;
}>;


export type TranslateQuery = { __typename?: 'Query', translate: { __typename?: 'ValueResponse', value?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MyTutorQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTutorQuery = { __typename?: 'Query', myTutor: { __typename?: 'Tutor', id: string, userId: string, tutorMessages: Array<{ __typename?: 'TutorMessage', id: string, createdAt: any, speechFile?: { __typename?: 'SpeechFile', url?: string | null, relativePath: string } | null, messageLog: { __typename?: 'MessageLog', role: string, content: string, morpho?: Array<{ __typename?: 'MorPho', surface_form: string, basic_form: string }> | null } }> } };

export type CreateTutorMessageMutationVariables = Exact<{
  input: CreateTutorMessageInput;
}>;


export type CreateTutorMessageMutation = { __typename?: 'Mutation', createTutorMessage: { __typename?: 'TutorMessageResponse', tutorMessage?: { __typename?: 'TutorMessage', id: string, speechFile?: { __typename?: 'SpeechFile', url?: string | null, relativePath: string } | null, messageLog: { __typename?: 'MessageLog', content: string, role: string } } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'BooleanResponse', value?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string }> | null } };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  photoUrl
  isGuest
  createdAt
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CompletePronounceDeckDocument = gql`
    mutation CompletePronounceDeck($level: String!) {
  completePronounceDeck(level: $level) {
    action {
      id
      userId
      sceneId
      type
      status
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CompletePronounceDeckMutationFn = Apollo.MutationFunction<CompletePronounceDeckMutation, CompletePronounceDeckMutationVariables>;

/**
 * __useCompletePronounceDeckMutation__
 *
 * To run a mutation, you first call `useCompletePronounceDeckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePronounceDeckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePronounceDeckMutation, { data, loading, error }] = useCompletePronounceDeckMutation({
 *   variables: {
 *      level: // value for 'level'
 *   },
 * });
 */
export function useCompletePronounceDeckMutation(baseOptions?: Apollo.MutationHookOptions<CompletePronounceDeckMutation, CompletePronounceDeckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePronounceDeckMutation, CompletePronounceDeckMutationVariables>(CompletePronounceDeckDocument, options);
      }
export type CompletePronounceDeckMutationHookResult = ReturnType<typeof useCompletePronounceDeckMutation>;
export type CompletePronounceDeckMutationResult = Apollo.MutationResult<CompletePronounceDeckMutation>;
export type CompletePronounceDeckMutationOptions = Apollo.BaseMutationOptions<CompletePronounceDeckMutation, CompletePronounceDeckMutationVariables>;
export const CreateSceneActionDocument = gql`
    mutation CreateSceneAction($input: CreateSceneActionInput!) {
  createSceneAction(input: $input) {
    action {
      id
      userId
      sceneId
      type
      status
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateSceneActionMutationFn = Apollo.MutationFunction<CreateSceneActionMutation, CreateSceneActionMutationVariables>;

/**
 * __useCreateSceneActionMutation__
 *
 * To run a mutation, you first call `useCreateSceneActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneActionMutation, { data, loading, error }] = useCreateSceneActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneActionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSceneActionMutation, CreateSceneActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSceneActionMutation, CreateSceneActionMutationVariables>(CreateSceneActionDocument, options);
      }
export type CreateSceneActionMutationHookResult = ReturnType<typeof useCreateSceneActionMutation>;
export type CreateSceneActionMutationResult = Apollo.MutationResult<CreateSceneActionMutation>;
export type CreateSceneActionMutationOptions = Apollo.BaseMutationOptions<CreateSceneActionMutation, CreateSceneActionMutationVariables>;
export const MyActionsDocument = gql`
    query MyActions {
  myActions {
    id
    userId
    sceneId
    type
    status
    createdAt
    scene {
      title
      description
      emoji
    }
  }
}
    `;

/**
 * __useMyActionsQuery__
 *
 * To run a query within a React component, call `useMyActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyActionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyActionsQuery(baseOptions?: Apollo.QueryHookOptions<MyActionsQuery, MyActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyActionsQuery, MyActionsQueryVariables>(MyActionsDocument, options);
      }
export function useMyActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyActionsQuery, MyActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyActionsQuery, MyActionsQueryVariables>(MyActionsDocument, options);
        }
export type MyActionsQueryHookResult = ReturnType<typeof useMyActionsQuery>;
export type MyActionsLazyQueryHookResult = ReturnType<typeof useMyActionsLazyQuery>;
export type MyActionsQueryResult = Apollo.QueryResult<MyActionsQuery, MyActionsQueryVariables>;
export const MyCompletePronounceActionsDocument = gql`
    query MyCompletePronounceActions {
  myCompletePronounceActions {
    id
    status
    type
    level
  }
}
    `;

/**
 * __useMyCompletePronounceActionsQuery__
 *
 * To run a query within a React component, call `useMyCompletePronounceActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCompletePronounceActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCompletePronounceActionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCompletePronounceActionsQuery(baseOptions?: Apollo.QueryHookOptions<MyCompletePronounceActionsQuery, MyCompletePronounceActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCompletePronounceActionsQuery, MyCompletePronounceActionsQueryVariables>(MyCompletePronounceActionsDocument, options);
      }
export function useMyCompletePronounceActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCompletePronounceActionsQuery, MyCompletePronounceActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCompletePronounceActionsQuery, MyCompletePronounceActionsQueryVariables>(MyCompletePronounceActionsDocument, options);
        }
export type MyCompletePronounceActionsQueryHookResult = ReturnType<typeof useMyCompletePronounceActionsQuery>;
export type MyCompletePronounceActionsLazyQueryHookResult = ReturnType<typeof useMyCompletePronounceActionsLazyQuery>;
export type MyCompletePronounceActionsQueryResult = Apollo.QueryResult<MyCompletePronounceActionsQuery, MyCompletePronounceActionsQueryVariables>;
export const MyLatestPronounceActionByWordDocument = gql`
    query MyLatestPronounceActionByWord($input: CreatePronounceActionInputForResolver!) {
  myLatestPronounceActionByWord(input: $input) {
    id
    pronounceScore
    pronounceWord
    pronounceKana
  }
}
    `;

/**
 * __useMyLatestPronounceActionByWordQuery__
 *
 * To run a query within a React component, call `useMyLatestPronounceActionByWordQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyLatestPronounceActionByWordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyLatestPronounceActionByWordQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMyLatestPronounceActionByWordQuery(baseOptions: Apollo.QueryHookOptions<MyLatestPronounceActionByWordQuery, MyLatestPronounceActionByWordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyLatestPronounceActionByWordQuery, MyLatestPronounceActionByWordQueryVariables>(MyLatestPronounceActionByWordDocument, options);
      }
export function useMyLatestPronounceActionByWordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyLatestPronounceActionByWordQuery, MyLatestPronounceActionByWordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyLatestPronounceActionByWordQuery, MyLatestPronounceActionByWordQueryVariables>(MyLatestPronounceActionByWordDocument, options);
        }
export type MyLatestPronounceActionByWordQueryHookResult = ReturnType<typeof useMyLatestPronounceActionByWordQuery>;
export type MyLatestPronounceActionByWordLazyQueryHookResult = ReturnType<typeof useMyLatestPronounceActionByWordLazyQuery>;
export type MyLatestPronounceActionByWordQueryResult = Apollo.QueryResult<MyLatestPronounceActionByWordQuery, MyLatestPronounceActionByWordQueryVariables>;
export const AppleLogInDocument = gql`
    mutation AppleLogIn($token: String!) {
  appleLogIn(token: $token) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type AppleLogInMutationFn = Apollo.MutationFunction<AppleLogInMutation, AppleLogInMutationVariables>;

/**
 * __useAppleLogInMutation__
 *
 * To run a mutation, you first call `useAppleLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppleLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appleLogInMutation, { data, loading, error }] = useAppleLogInMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAppleLogInMutation(baseOptions?: Apollo.MutationHookOptions<AppleLogInMutation, AppleLogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AppleLogInMutation, AppleLogInMutationVariables>(AppleLogInDocument, options);
      }
export type AppleLogInMutationHookResult = ReturnType<typeof useAppleLogInMutation>;
export type AppleLogInMutationResult = Apollo.MutationResult<AppleLogInMutation>;
export type AppleLogInMutationOptions = Apollo.BaseMutationOptions<AppleLogInMutation, AppleLogInMutationVariables>;
export const GoogleLogInDocument = gql`
    mutation GoogleLogIn($token: String!) {
  googleLogIn(token: $token) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type GoogleLogInMutationFn = Apollo.MutationFunction<GoogleLogInMutation, GoogleLogInMutationVariables>;

/**
 * __useGoogleLogInMutation__
 *
 * To run a mutation, you first call `useGoogleLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLogInMutation, { data, loading, error }] = useGoogleLogInMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGoogleLogInMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLogInMutation, GoogleLogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleLogInMutation, GoogleLogInMutationVariables>(GoogleLogInDocument, options);
      }
export type GoogleLogInMutationHookResult = ReturnType<typeof useGoogleLogInMutation>;
export type GoogleLogInMutationResult = Apollo.MutationResult<GoogleLogInMutation>;
export type GoogleLogInMutationOptions = Apollo.BaseMutationOptions<GoogleLogInMutation, GoogleLogInMutationVariables>;
export const GuestLoginDocument = gql`
    mutation GuestLogin {
  guestLogin {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type GuestLoginMutationFn = Apollo.MutationFunction<GuestLoginMutation, GuestLoginMutationVariables>;

/**
 * __useGuestLoginMutation__
 *
 * To run a mutation, you first call `useGuestLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGuestLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [guestLoginMutation, { data, loading, error }] = useGuestLoginMutation({
 *   variables: {
 *   },
 * });
 */
export function useGuestLoginMutation(baseOptions?: Apollo.MutationHookOptions<GuestLoginMutation, GuestLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GuestLoginMutation, GuestLoginMutationVariables>(GuestLoginDocument, options);
      }
export type GuestLoginMutationHookResult = ReturnType<typeof useGuestLoginMutation>;
export type GuestLoginMutationResult = Apollo.MutationResult<GuestLoginMutation>;
export type GuestLoginMutationOptions = Apollo.BaseMutationOptions<GuestLoginMutation, GuestLoginMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    value
    errors {
      field
      message
    }
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: CreateUserInput!) {
  register(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const TextToSpeechDocument = gql`
    mutation TextToSpeech($input: TextToSpeechInput!) {
  textToSpeech(input: $input) {
    relativePath
    url
  }
}
    `;
export type TextToSpeechMutationFn = Apollo.MutationFunction<TextToSpeechMutation, TextToSpeechMutationVariables>;

/**
 * __useTextToSpeechMutation__
 *
 * To run a mutation, you first call `useTextToSpeechMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTextToSpeechMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [textToSpeechMutation, { data, loading, error }] = useTextToSpeechMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTextToSpeechMutation(baseOptions?: Apollo.MutationHookOptions<TextToSpeechMutation, TextToSpeechMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TextToSpeechMutation, TextToSpeechMutationVariables>(TextToSpeechDocument, options);
      }
export type TextToSpeechMutationHookResult = ReturnType<typeof useTextToSpeechMutation>;
export type TextToSpeechMutationResult = Apollo.MutationResult<TextToSpeechMutation>;
export type TextToSpeechMutationOptions = Apollo.BaseMutationOptions<TextToSpeechMutation, TextToSpeechMutationVariables>;
export const TextToSpeechJpEnDocument = gql`
    mutation TextToSpeechJpEn($input: TextToSpeechInput!) {
  textToSpeechJpEn(input: $input) {
    relativePath
    url
  }
}
    `;
export type TextToSpeechJpEnMutationFn = Apollo.MutationFunction<TextToSpeechJpEnMutation, TextToSpeechJpEnMutationVariables>;

/**
 * __useTextToSpeechJpEnMutation__
 *
 * To run a mutation, you first call `useTextToSpeechJpEnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTextToSpeechJpEnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [textToSpeechJpEnMutation, { data, loading, error }] = useTextToSpeechJpEnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTextToSpeechJpEnMutation(baseOptions?: Apollo.MutationHookOptions<TextToSpeechJpEnMutation, TextToSpeechJpEnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TextToSpeechJpEnMutation, TextToSpeechJpEnMutationVariables>(TextToSpeechJpEnDocument, options);
      }
export type TextToSpeechJpEnMutationHookResult = ReturnType<typeof useTextToSpeechJpEnMutation>;
export type TextToSpeechJpEnMutationResult = Apollo.MutationResult<TextToSpeechJpEnMutation>;
export type TextToSpeechJpEnMutationOptions = Apollo.BaseMutationOptions<TextToSpeechJpEnMutation, TextToSpeechJpEnMutationVariables>;
export const CanUseTutorDocument = gql`
    query CanUseTutor($input: [MessageLogInput!]!) {
  canUseTutor(input: $input)
}
    `;

/**
 * __useCanUseTutorQuery__
 *
 * To run a query within a React component, call `useCanUseTutorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCanUseTutorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCanUseTutorQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCanUseTutorQuery(baseOptions: Apollo.QueryHookOptions<CanUseTutorQuery, CanUseTutorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CanUseTutorQuery, CanUseTutorQueryVariables>(CanUseTutorDocument, options);
      }
export function useCanUseTutorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CanUseTutorQuery, CanUseTutorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CanUseTutorQuery, CanUseTutorQueryVariables>(CanUseTutorDocument, options);
        }
export type CanUseTutorQueryHookResult = ReturnType<typeof useCanUseTutorQuery>;
export type CanUseTutorLazyQueryHookResult = ReturnType<typeof useCanUseTutorLazyQuery>;
export type CanUseTutorQueryResult = Apollo.QueryResult<CanUseTutorQuery, CanUseTutorQueryVariables>;
export const SceneReplyDocument = gql`
    query SceneReply($sceneId: String!, $input: [MessageLogInput!]!) {
  sceneReply(sceneId: $sceneId, input: $input) {
    errors {
      field
      message
    }
    logGptResponse {
      role
      jsonResponse {
        text
        isComplete
      }
    }
  }
}
    `;

/**
 * __useSceneReplyQuery__
 *
 * To run a query within a React component, call `useSceneReplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneReplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneReplyQuery({
 *   variables: {
 *      sceneId: // value for 'sceneId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSceneReplyQuery(baseOptions: Apollo.QueryHookOptions<SceneReplyQuery, SceneReplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneReplyQuery, SceneReplyQueryVariables>(SceneReplyDocument, options);
      }
export function useSceneReplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneReplyQuery, SceneReplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneReplyQuery, SceneReplyQueryVariables>(SceneReplyDocument, options);
        }
export type SceneReplyQueryHookResult = ReturnType<typeof useSceneReplyQuery>;
export type SceneReplyLazyQueryHookResult = ReturnType<typeof useSceneReplyLazyQuery>;
export type SceneReplyQueryResult = Apollo.QueryResult<SceneReplyQuery, SceneReplyQueryVariables>;
export const TutorReplyDocument = gql`
    query TutorReply($input: [MessageLogInput!]!) {
  tutorReply(input: $input) {
    errors {
      field
      message
    }
    messageLog {
      role
      content
      morpho {
        surface_form
        basic_form
      }
    }
  }
}
    `;

/**
 * __useTutorReplyQuery__
 *
 * To run a query within a React component, call `useTutorReplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useTutorReplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTutorReplyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTutorReplyQuery(baseOptions: Apollo.QueryHookOptions<TutorReplyQuery, TutorReplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TutorReplyQuery, TutorReplyQueryVariables>(TutorReplyDocument, options);
      }
export function useTutorReplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TutorReplyQuery, TutorReplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TutorReplyQuery, TutorReplyQueryVariables>(TutorReplyDocument, options);
        }
export type TutorReplyQueryHookResult = ReturnType<typeof useTutorReplyQuery>;
export type TutorReplyLazyQueryHookResult = ReturnType<typeof useTutorReplyLazyQuery>;
export type TutorReplyQueryResult = Apollo.QueryResult<TutorReplyQuery, TutorReplyQueryVariables>;
export const CreateSceneMessageDocument = gql`
    mutation CreateSceneMessage($input: CreateSceneMessageInput!) {
  createSceneMessage(input: $input) {
    sceneMessage {
      id
      messageLog {
        content
        role
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateSceneMessageMutationFn = Apollo.MutationFunction<CreateSceneMessageMutation, CreateSceneMessageMutationVariables>;

/**
 * __useCreateSceneMessageMutation__
 *
 * To run a mutation, you first call `useCreateSceneMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneMessageMutation, { data, loading, error }] = useCreateSceneMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateSceneMessageMutation, CreateSceneMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSceneMessageMutation, CreateSceneMessageMutationVariables>(CreateSceneMessageDocument, options);
      }
export type CreateSceneMessageMutationHookResult = ReturnType<typeof useCreateSceneMessageMutation>;
export type CreateSceneMessageMutationResult = Apollo.MutationResult<CreateSceneMessageMutation>;
export type CreateSceneMessageMutationOptions = Apollo.BaseMutationOptions<CreateSceneMessageMutation, CreateSceneMessageMutationVariables>;
export const CreateSceneSessionDocument = gql`
    mutation CreateSceneSession($input: CreateSceneSessionInput!) {
  createSceneSession(input: $input) {
    sceneSession {
      id
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateSceneSessionMutationFn = Apollo.MutationFunction<CreateSceneSessionMutation, CreateSceneSessionMutationVariables>;

/**
 * __useCreateSceneSessionMutation__
 *
 * To run a mutation, you first call `useCreateSceneSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneSessionMutation, { data, loading, error }] = useCreateSceneSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSceneSessionMutation, CreateSceneSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSceneSessionMutation, CreateSceneSessionMutationVariables>(CreateSceneSessionDocument, options);
      }
export type CreateSceneSessionMutationHookResult = ReturnType<typeof useCreateSceneSessionMutation>;
export type CreateSceneSessionMutationResult = Apollo.MutationResult<CreateSceneSessionMutation>;
export type CreateSceneSessionMutationOptions = Apollo.BaseMutationOptions<CreateSceneSessionMutation, CreateSceneSessionMutationVariables>;
export const SceneSessionDocument = gql`
    query SceneSession($id: String!) {
  sceneSession(id: $id) {
    id
    status
    sceneMessages {
      id
      speechFile {
        url
        relativePath
      }
      messageLog {
        role
        content
        morpho {
          surface_form
          basic_form
        }
      }
    }
  }
}
    `;

/**
 * __useSceneSessionQuery__
 *
 * To run a query within a React component, call `useSceneSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneSessionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneSessionQuery(baseOptions: Apollo.QueryHookOptions<SceneSessionQuery, SceneSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneSessionQuery, SceneSessionQueryVariables>(SceneSessionDocument, options);
      }
export function useSceneSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneSessionQuery, SceneSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneSessionQuery, SceneSessionQueryVariables>(SceneSessionDocument, options);
        }
export type SceneSessionQueryHookResult = ReturnType<typeof useSceneSessionQuery>;
export type SceneSessionLazyQueryHookResult = ReturnType<typeof useSceneSessionLazyQuery>;
export type SceneSessionQueryResult = Apollo.QueryResult<SceneSessionQuery, SceneSessionQueryVariables>;
export const CreateSceneDocument = gql`
    mutation CreateScene($input: CreateSceneInput!) {
  createScene(input: $input) {
    scene {
      id
      title
      description
      goal
      challenges
      systemPrompt
      emoji
      isProFeature
      level
      subLevel
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateSceneMutationFn = Apollo.MutationFunction<CreateSceneMutation, CreateSceneMutationVariables>;

/**
 * __useCreateSceneMutation__
 *
 * To run a mutation, you first call `useCreateSceneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSceneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSceneMutation, { data, loading, error }] = useCreateSceneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSceneMutation(baseOptions?: Apollo.MutationHookOptions<CreateSceneMutation, CreateSceneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSceneMutation, CreateSceneMutationVariables>(CreateSceneDocument, options);
      }
export type CreateSceneMutationHookResult = ReturnType<typeof useCreateSceneMutation>;
export type CreateSceneMutationResult = Apollo.MutationResult<CreateSceneMutation>;
export type CreateSceneMutationOptions = Apollo.BaseMutationOptions<CreateSceneMutation, CreateSceneMutationVariables>;
export const SceneDocument = gql`
    query Scene($id: String!) {
  scene(id: $id) {
    id
    title
    description
    goal
    challenges
    systemPrompt
    combinedSystemPrompt
    isProFeature
    isComplete
    startJson {
      text
      isComplete
    }
    emoji
    level
    subLevel
  }
}
    `;

/**
 * __useSceneQuery__
 *
 * To run a query within a React component, call `useSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneQuery(baseOptions: Apollo.QueryHookOptions<SceneQuery, SceneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneQuery, SceneQueryVariables>(SceneDocument, options);
      }
export function useSceneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneQuery, SceneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneQuery, SceneQueryVariables>(SceneDocument, options);
        }
export type SceneQueryHookResult = ReturnType<typeof useSceneQuery>;
export type SceneLazyQueryHookResult = ReturnType<typeof useSceneLazyQuery>;
export type SceneQueryResult = Apollo.QueryResult<SceneQuery, SceneQueryVariables>;
export const ScenesDocument = gql`
    query Scenes {
  scenes {
    id
    title
    description
    goal
    challenges
    systemPrompt
    isProFeature
    isComplete
    startJson {
      text
      isComplete
    }
    emoji
    level
    subLevel
    day
  }
}
    `;

/**
 * __useScenesQuery__
 *
 * To run a query within a React component, call `useScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useScenesQuery(baseOptions?: Apollo.QueryHookOptions<ScenesQuery, ScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScenesQuery, ScenesQueryVariables>(ScenesDocument, options);
      }
export function useScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScenesQuery, ScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScenesQuery, ScenesQueryVariables>(ScenesDocument, options);
        }
export type ScenesQueryHookResult = ReturnType<typeof useScenesQuery>;
export type ScenesLazyQueryHookResult = ReturnType<typeof useScenesLazyQuery>;
export type ScenesQueryResult = Apollo.QueryResult<ScenesQuery, ScenesQueryVariables>;
export const ToggleTranslateJpEnDocument = gql`
    query ToggleTranslateJpEn($input: TranslateInput!) {
  toggleTranslateJpEn(input: $input) {
    value
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useToggleTranslateJpEnQuery__
 *
 * To run a query within a React component, call `useToggleTranslateJpEnQuery` and pass it any options that fit your needs.
 * When your component renders, `useToggleTranslateJpEnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToggleTranslateJpEnQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useToggleTranslateJpEnQuery(baseOptions: Apollo.QueryHookOptions<ToggleTranslateJpEnQuery, ToggleTranslateJpEnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToggleTranslateJpEnQuery, ToggleTranslateJpEnQueryVariables>(ToggleTranslateJpEnDocument, options);
      }
export function useToggleTranslateJpEnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToggleTranslateJpEnQuery, ToggleTranslateJpEnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToggleTranslateJpEnQuery, ToggleTranslateJpEnQueryVariables>(ToggleTranslateJpEnDocument, options);
        }
export type ToggleTranslateJpEnQueryHookResult = ReturnType<typeof useToggleTranslateJpEnQuery>;
export type ToggleTranslateJpEnLazyQueryHookResult = ReturnType<typeof useToggleTranslateJpEnLazyQuery>;
export type ToggleTranslateJpEnQueryResult = Apollo.QueryResult<ToggleTranslateJpEnQuery, ToggleTranslateJpEnQueryVariables>;
export const TranslateDocument = gql`
    query Translate($input: TranslateInput!) {
  translate(input: $input) {
    value
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useTranslateQuery__
 *
 * To run a query within a React component, call `useTranslateQuery` and pass it any options that fit your needs.
 * When your component renders, `useTranslateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTranslateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTranslateQuery(baseOptions: Apollo.QueryHookOptions<TranslateQuery, TranslateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TranslateQuery, TranslateQueryVariables>(TranslateDocument, options);
      }
export function useTranslateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TranslateQuery, TranslateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TranslateQuery, TranslateQueryVariables>(TranslateDocument, options);
        }
export type TranslateQueryHookResult = ReturnType<typeof useTranslateQuery>;
export type TranslateLazyQueryHookResult = ReturnType<typeof useTranslateLazyQuery>;
export type TranslateQueryResult = Apollo.QueryResult<TranslateQuery, TranslateQueryVariables>;
export const MyTutorDocument = gql`
    query MyTutor {
  myTutor {
    id
    userId
    tutorMessages {
      id
      speechFile {
        url
        relativePath
      }
      messageLog {
        role
        content
        morpho {
          surface_form
          basic_form
        }
      }
      createdAt
    }
  }
}
    `;

/**
 * __useMyTutorQuery__
 *
 * To run a query within a React component, call `useMyTutorQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTutorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTutorQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTutorQuery(baseOptions?: Apollo.QueryHookOptions<MyTutorQuery, MyTutorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTutorQuery, MyTutorQueryVariables>(MyTutorDocument, options);
      }
export function useMyTutorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTutorQuery, MyTutorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTutorQuery, MyTutorQueryVariables>(MyTutorDocument, options);
        }
export type MyTutorQueryHookResult = ReturnType<typeof useMyTutorQuery>;
export type MyTutorLazyQueryHookResult = ReturnType<typeof useMyTutorLazyQuery>;
export type MyTutorQueryResult = Apollo.QueryResult<MyTutorQuery, MyTutorQueryVariables>;
export const CreateTutorMessageDocument = gql`
    mutation CreateTutorMessage($input: CreateTutorMessageInput!) {
  createTutorMessage(input: $input) {
    tutorMessage {
      id
      speechFile {
        url
        relativePath
      }
      messageLog {
        content
        role
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreateTutorMessageMutationFn = Apollo.MutationFunction<CreateTutorMessageMutation, CreateTutorMessageMutationVariables>;

/**
 * __useCreateTutorMessageMutation__
 *
 * To run a mutation, you first call `useCreateTutorMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTutorMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTutorMessageMutation, { data, loading, error }] = useCreateTutorMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTutorMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateTutorMessageMutation, CreateTutorMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTutorMessageMutation, CreateTutorMessageMutationVariables>(CreateTutorMessageDocument, options);
      }
export type CreateTutorMessageMutationHookResult = ReturnType<typeof useCreateTutorMessageMutation>;
export type CreateTutorMessageMutationResult = Apollo.MutationResult<CreateTutorMessageMutation>;
export type CreateTutorMessageMutationOptions = Apollo.BaseMutationOptions<CreateTutorMessageMutation, CreateTutorMessageMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser {
  deleteUser {
    value
    errors {
      field
    }
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;