public class QueueJob implements Queueable {
    
    public Set<Id> ids;
    
    //Constructor
    public QueueJob(Set<Id> ids){//You can also Pass SObjects here.
        this.ids = ids;
    }
    
    //Execute Queueable
    public void execute(QueueableContext QC){
        //Do here !
    }
}