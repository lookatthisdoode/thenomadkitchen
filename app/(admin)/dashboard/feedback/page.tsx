import { fetchFeedbackMessages } from "@/app/lib/data";
import { DeleteFeedBackButton } from "@/app/ui/dashboard/buttons";

export default async function FeedBack() {
  const messages = await fetchFeedbackMessages();

  return (
    <section>
      <div className="content px-10 ">
        {messages.map((item, index) => {
          return (
            <>
              <div className="flex text-sm flex-col md:flex-row py-3 border-t-4">
                <div className="border flex flex-col md:min-w-[300px] md:w-[300px]">
                  <div className="border-b p-2">{item.name}</div>
                  <div className="border-b p-2">{item.contact}</div>
                  <div className="p-2">{item.date}</div>
                </div>

                <div className="p-3 w-full border-x border-b md:border-x-0 md:border-y md:border-r">
                  <p>{item.customermessage}</p>
                </div>
              </div>
              <DeleteFeedBackButton id={item.id} />
            </>
          );
        })}
      </div>
    </section>
  );
}
