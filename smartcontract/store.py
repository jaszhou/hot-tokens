"""
    Main for SC
    :param operation: operation
    :type operation: str
    :param args: list of arguments
        args[0]: token name

    :param type: str

    build /smart-contracts/store.py test 0710 02 True False add ['NAS']

    import contract  /smart-contracts/store.avm 0710 02 True False
"""

from boa.interop.Neo.Runtime import Log, Notify
from boa.interop.Neo.Storage import Get,Put,Delete,GetContext

def Main(operation, args):


    context = GetContext()

    if operation == 'add':
        # Try to get a value for this key from storage

        item_key = args[0]

        item_value = Get(context, item_key)
        msg = ["Value read from storage:", item_value]
        Notify(msg)

        if len(item_value) == 0:
            Notify("Storage key not yet set. Setting to 1")
            item_value = 1

        else:
            Notify("Storage key already set. Incrementing by 1")
            item_value += 1

        # Store the new value
        Put(context, item_key, item_value)
        msg = ["New value written into storage:", item_value]
        Notify(msg)

        return item_value

    elif operation == 'balance':
            item_key = args[0]

            item_value = Get(context, item_key)
            msg = ["Value read from storage:", item_value]
            Notify(msg)

            if len(item_value) == 0:
                Notify("Storage key not yet set. Setting to 0")
                item_value = 0

            else:
                Notify("Storage key already set.")


            return item_value
