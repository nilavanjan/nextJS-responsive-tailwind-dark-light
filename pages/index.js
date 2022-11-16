import Bot from "../components/Bot";
import DynamicNavbar from "../components/DynamicNavbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow dark:bg-black">
        <p>
          Before you can begin to determine what the composition of a particular
          paragraph will be, you must first decide on a working thesis for your
          paper. What is the most important idea that you are trying to convey
          to your reader? The information in each paragraph must be related to
          that idea. In other words, your paragraphs should remind your reader
          that there is a recurrent relationship between your thesis and the
          information in each paragraph. A working thesis functions like a seed
          from which your paper, and your ideas, will grow. The whole process is
          an organic one—a natural progression from a seed to a full-blown paper
          where there are direct, familial relationships between all of the
          ideas in the paper. The decision about what to put into your
          paragraphs begins with the germination of a seed of ideas; this
          “germination process” is better known as brainstorming. There are many
          techniques for brainstorming; whichever one you choose, this stage of
          paragraph development cannot be skipped. Building paragraphs can be
          like building a skyscraper: there must be a well-planned foundation
          that supports what you are building. Any cracks, inconsistencies, or
          other corruptions of the foundation can cause your whole paper to
          crumble. So, lets suppose that you have done some brainstorming to
          develop your thesis. What else should you keep in mind as you begin to
          create paragraphs? Every paragraph in a paper should be Unified—All of
          the sentences in a single paragraph should be related to a single
          controlling idea (often expressed in the topic sentence of the
          paragraph). Clearly related to the thesis—The sentences should all
          refer to the central idea, or thesis, of the paper (Rosen and Behrens
          119). Coherent—The sentences should be arranged in a logical manner
          and should follow a definite plan for development (Rosen and Behrens
          119). Well-developed—Every idea discussed in the paragraph should be
          adequately explained and supported through evidence and details that
          work together to explain the paragraphs controlling idea (Rosen and
          Behrens 119).
        </p>
      </div>

      <footer>
        <Bot />
      </footer>
    </div>
  );
}
