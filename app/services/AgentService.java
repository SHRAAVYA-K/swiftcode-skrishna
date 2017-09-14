package services;

import com.fasterxml.jackson.databind.JsonNode;
import data.AgentResponse;
import play.libs.ws.WS;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;
import tyrex.services.UUID;

import java.util.concurrent.CompletionStage;

public class AgentService
{
    public AgentResponse getAgentResponse(String messageUser)
    {
        AgentResponse agentResponse = new AgentResponse();
        try {
            WSRequest queryRequest = WS.url("https://api.api.ai/api/query");
            CompletionStage<WSResponse> responsePromise = queryRequest
                    .setQueryParameter("v", "20150910")
                    .setQueryParameter("query",messageUser)
                    .setQueryParameter("lang", "en")
                    .setQueryParameter("sessionId", java.util.UUID.randomUUID().toString())
                    .setQueryParameter("timezone", "2017-08-09T03:25:23+0530")
                    .setHeader("Authorization", "Bearer 946df4ead6524dbcaeb5c6c2409462b6")
                    .get();
            JsonNode response = responsePromise.thenApply(WSResponse::asJson).toCompletableFuture().get();
            agentResponse.keyword= response.get("result").get("parameters").get("keyword").asText();

        }
        catch (Exception e)
        {
            //agentResponse.ke
        }
        return agentResponse;

    }
}
