import { Client, Account, Databases, ID, Query } from "appwrite";

export const client = new Client();

export const config = {
  endpoint: "https://fra.cloud.appwrite.io/v1",
  projectId: "68dd2119002b85399dfc",
  databaseId: "68dd3101002740f6ada3",
  userCollectionId: "users",
};

client.setEndpoint(config.endpoint).setProject(config.projectId);

// Create instances
const account = new Account(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    console.log(newAccount);

    if (!newAccount) throw Error;

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        userId: newAccount.$id,
        username: username,
        email: email,
      }
    );
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign Out function
export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.error("Error signing out:", error);
    throw new Error(error);
  }
};



// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error("No current account found");

    // Use 'userId' instead of 'accountId'
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("userId", currentAccount.$id)]
    );

    if (!currentUser || currentUser.documents.length === 0)
      throw new Error("No user document found");

    return {
      ...currentUser.documents[0],
      name: currentAccount.name,
    };
  } catch (error) {
    return null;
  }
}
