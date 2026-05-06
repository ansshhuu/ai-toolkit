import argparse
from app.utils import run_task
from app.logger import logger

def main():
    parser=argparse.ArgumentParser(description="AI Text Processing Toolkit")
    parser.add_argument(
        "--task",
        choices=["summarize", "keywords", "classify", "all"],
        required=True,
        help="Choose the AI task to run"
    )
    parser.add_argument(
        "--text",
        type=str,
        help="Input text to analyze"
    )
    parser.add_argument(
        "--file",
        type=str,
        help="Path to text file"
    )
    parser.add_argument(
    "--out",
    type=str,
    help="Optional output JSON file"
    )
    args=parser.parse_args()
    input_text=None
    if args.text:
        input_text=args.text
    elif args.file:
        with open(args.file,"r",encoding="utf-8")as f:
            input_text=f.read()
    else:
        print("Error: Provide either --text or --file")
        return
    try:
        logger.info(f"Running task:{args.task}")
        result=run_task(args.task,input_text)
        print(result)
        if args.out:
            with open(args.out,"w",encoding="utf-8") as f:
                f.write(result.model_dump_json(indent=2))
            print(f"\nSaved output to {args.out}")

        logger.info("Task completed successfully")
    except Exception as e:
        logger.error(f"Error:{e}")
        print(f"Error:{e}")

if __name__=="__main__":
    main()


