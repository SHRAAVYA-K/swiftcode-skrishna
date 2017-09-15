package data;
//feedresponse for the bot- i.e bot's message
public class Message {
    public String text;
    public FeedResponse feedResponse;
    public Sender sender;
    public enum Sender{
        BOT,USER
    }
}
