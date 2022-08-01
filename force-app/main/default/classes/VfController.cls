public class VfController {
    public Account acc{get; set;}
    
    
    public ExtensionClass ex;
    public VfController(){
        acc = new Account();
        ex = new ExtensionClass(this);
    }
    
    public PageReference saveAccount(){
        INSERT acc;
        String aId = ex.accountList.get(0).id;
        return new PageReference('/'+aId);
    }
    
    public PageReference cancelAccount(){
		String aId = ex.accountList.get(0).id;
        return new PageReference('/'+aId);
    }
}