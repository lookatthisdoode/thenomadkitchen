import { fetchFeedbackMessages } from "@/app/lib/data";
import { Button } from "@/app/ui/button";

export default async function FeedBack() {
  const messages = await fetchFeedbackMessages();

  return (
    <section>
      <div className="content">
        {messages.map((item, index) => {
          return (
            <>
              <div className="flex flex-col md:flex-row py-2 md:py-10 m-3">
                <div className="border flex flex-col md:min-w-[300px] md:w-[300px]">
                  <div className="border-b p-2">{item.name}</div>
                  <div className="border-b p-2">{item.contact}</div>
                  <div className="p-2">{item.date}</div>
                  <Button className="rounded-none bg-blue-500 hover:bg-slate-400">
                    Delete message WIP
                  </Button>
                </div>

                <div className="p-3 border w-full">
                  <p>{item.customermessage}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
