import DataTrackerForm from "@/components/shared/DataTrackerForm"
import { auth } from "@clerk/nextjs";

const CreateDataTracker = () => {
  // const { sessionClaims } = auth();
  // const userId = sessionClaims?.userId as string;
  const { userId } = auth() as { userId: string };

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Data Tracker</h3>
      </section>

      <div className="wrapper my-8">
        <DataTrackerForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateDataTracker